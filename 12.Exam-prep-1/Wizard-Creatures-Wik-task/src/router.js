const router = require('express').Router();
const homeController = require('./controllers/homeController')
const userController = require('./controllers/userController')

//to do add endpoints with controllers here...

router.use(homeController);
router.use('/users', userController)




module.exports = router