const router = require("express").Router();
const creatureServise = require ('../services/creatureServise')

router.get("/all", async(req, res) => {
   const cretures =  await creatureServise.getAll().lean()     // или подаваме [] -> there is no creatures
   //console.log({cretures});
  res.render("post/all-posts", {cretures});
});

router.get("/create", (req, res) => {
  res.render("post/create");
});
router.post("/create", async(req, res) => {
   //console.log(req);
   const { name, species, skinColor, eyeColor, image, description } = req.body;
   const payload = { name, species, skinColor, eyeColor, image, description, owner: req.user }
   

   await creatureServise.create(payload)
  res.redirect("/posts/all");
});

router.get("/profile", async(req, res) => {
   const {user} = req;

   const myCreatures = await creatureServise.getMyCreatures(user?._id).lean() // [] - for no posts
   // console.log({user});
   // console.log({myCreatures});
//console.log({owner:myCreatures[0].owner?.firstName});
  res.render("post/profile" , {myCreatures});
});

router.get("/:creatureId/details" , async(req,res) => {
   const {creatureId} = req.params
  // console.log({creatureId});

   const creature = await creatureServise.singleCreature(creatureId).lean();
   //const isUserCreature = 
   
   //console.log({creature});
   const {user} = req;
   //console.log({user});
   const {owner} = creature
   //console.log({owner});

   const isOwner = user?._id === owner.toString();
   //console.log({isOwner});

   const hasVoted = creature.votes.some( v => v?.toString() === user?._id)
   const jointedElaimsOwners = creature.votes.map(v => v.email).join(', ')
//console.log({votes : creature.votes[0].email});
   res.render("post/details" , {creature, isOwner, hasVoted, jointedElaimsOwners})
});

router.get("/:creatureId/edit", async(req, res) => {
   const {creatureId} = req.params;
   const creature = await creatureServise.singleCreature(creatureId).lean();


   res.render("post/edit", {creature})
});

router.post("/:creatureId/edit", async(req, res) => {
   const {creatureId} = req.params;
   const { name, species, skinColor, eyeColor, image, description } = req.body;
   const payload = { name, species, skinColor, eyeColor, image, description, owner: req.user }

await creatureServise.update(creatureId,payload)
   res.redirect(`/posts/${creatureId}/details`)
});

router.get("/:creatureId/delete", async(req, res) => {
   const {creatureId} = req.params;

   await creatureServise.delete(creatureId)

   res.redirect("/posts/all")

});


router.get("/:creatureId/vote", async(req, res) =>{
   const {creatureId} = req.params;
   const {_id} = req.user;

   
await creatureServise.addVotesToCreature(creatureId,_id)
   //console.log({_id});


   res.redirect(`/posts/${creatureId}/details`)
})

module.exports = router;
