const router = require('express').Router()  //модулярен раутер
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController')

router.use(homeController);
router.use('/users',userController)



module.exports = router