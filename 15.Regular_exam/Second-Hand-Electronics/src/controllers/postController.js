const router = require("express").Router();
const electronicsService = require('../services/electronicsService')
 
router.get("/catalog", (req, res) => {
  res.render("post/catalog");
});

router.get("/create", (req, res) => {
  res.render("post/create");
});
router.post("/create",async (req, res) => {

  const  {name ,type, production,exploitation,damages,image,price,description, } = req.body;
  const payload = {name ,type, production,exploitation,damages,image,price,description,owner:{}, };
  //console.log(payload);
await electronicsService.create(payload)
  res.redirect("/posts/catalog");
});

router.get("/search", (req, res) => {
  res.render("post/search");
});

module.exports = router;
