const router = require('express').Router();

router.get("/" , (req, res) =>{
    //res.send("hello home page!")
    res.render('home')
});



module.exports = router