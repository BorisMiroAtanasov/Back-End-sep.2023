const router  = require("express").Router();

router.get('/catalog', (req, res) =>{
   res.render("post/catalog")

});

router.get('/create', (req, res) =>{
   res.render("post/create")

})

router.get('/search', (req, res) =>{
   res.render("post/search")

})

module.exports = router