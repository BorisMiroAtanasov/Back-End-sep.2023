const router = require('express').Router()



router.get("/create", (req, res) => {
   res.render("create")
});

router.get("/about", (req, res) => {
    res.render("about")
 })

module.exports = router