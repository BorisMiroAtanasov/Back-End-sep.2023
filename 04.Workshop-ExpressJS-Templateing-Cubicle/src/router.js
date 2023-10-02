const router = require('express').Router();
const homeControler= require('./controllers/homeControler');
const cubewControler= require('./controllers/cubeControler');


router.use(homeControler);
router.use('/cubes', cubewControler);


module.exports = router