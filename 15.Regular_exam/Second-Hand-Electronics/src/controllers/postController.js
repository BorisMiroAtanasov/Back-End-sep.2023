const router = require("express").Router();
const electronicsService = require('../services/electronicsService')
 
router.get("/catalog", async(req, res) => {
const electronicsAll = await electronicsService.getAll().lean();
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
   res.render('post/details',{electronicDevice})
})

module.exports = router;
