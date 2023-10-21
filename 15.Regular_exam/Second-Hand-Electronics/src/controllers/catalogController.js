const router  = require("express").Router();

router.get('/catalog', (req, res) =>{
   res.render("post/catalog")

})

module.exports = router