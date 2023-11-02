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

router.get("/profile", (req, res) => {
  res.render("post/profile");
});

router.get("/:creatureId/details" , async(req,res) => {
   const {creatureId} = req.params
  // console.log({creatureId});

   const creature = await creatureServise.singleCreature(creatureId).lean();
   //const isUserCreature = 
   
   //console.log({creature});
   const {user} = req;
   console.log({user});
   const {owner} = creature
   console.log({owner});

   const isOwner = user?._id === owner.toString();
   //console.log({isOwner});
   res.render("post/details" , {creature, isOwner})
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

router.get("/:creatureId/delete", (req, res) => {
   const {creatureId} = req.params;

   res.redirect("/posts/all")

})

module.exports = router;
