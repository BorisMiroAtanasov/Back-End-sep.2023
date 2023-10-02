const router = require('express').Router();
const homeControler= require('./controllers/homeControler');
const cubewControler= require('./controllers/cubeControler');


router.use(homeControler);
router.use('/cubes', cubewControler);


router.get("*", (req, res) => {
    res.redirect("/404");
  });


module.exports = router