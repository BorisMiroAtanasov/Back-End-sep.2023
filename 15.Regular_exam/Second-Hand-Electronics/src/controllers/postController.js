const router = require("express").Router();
const electronicsService = require('../services/electronicsService')
 
router.get("/catalog", async(req, res) => {
const electronicsAll = await electronicsService.getAll().lean(); // for check [] - "Therre is no electronics found"
//console.log({electronicsAll});
  res.render("post/catalog" , {electronicsAll});
});

router.get("/create", (req, res) => {

  res.render("post/create");
});
router.post("/create",async (req, res) => {

  const  {name ,type, production,exploitation,damages,image,price,description, } = req.body;
  const payload = {name ,type, production,exploitation,damages,image,price,description,owner:req.user, };
 // console.log(req);
await electronicsService.create(payload)
  res.redirect("/posts/catalog");
});

router.get("/search", (req, res) => {
  res.render("post/search");
});

router.get("/:electronicsId/details", async(req, res) =>{
   const {electronicsId} = req.params
   //console.log({electronicsId});

   const electronicDevice = await electronicsService.singleDevice(electronicsId).lean()
   //console.log({electronicDevice});

   //const isUserTheOwner = 
   const {user} = req;
   const {owner} = electronicDevice;
   const isOwner = user?._id === owner.toString();
   console.log({user});
   res.render('post/details',{electronicDevice,isOwner})
});

router.get("/:electronicsId/edit", async(req, res)=>{
   const {electronicsId} = req.params;
   
   const electronicDevice = await electronicsService.singleDevice(electronicsId).lean()

   res.render('post/edit',{electronicDevice})
});
router.post("/:electronicsId/edit", async(req, res)=>{
   const {electronicsId} = req.params;
   const  {name ,type, production,exploitation,damages,image,price,description, } = req.body;
   const payload = {name ,type, production,exploitation,damages,image,price,description,owner:req.user, };
  await  electronicsService.update(electronicsId,payload)

   res.redirect(`/posts/${electronicsId}/details`)
});



router.get("/:electronicsId/delete", (req, res)=>{
   const {electronicsId} = req.params;
   res.redirect('/posts/catalog')
})

module.exports = router;
