const router = require('express').Router();
const homeController = require('./controllers/homeController')


//to do add endpoints with controllers here...

router.use(homeController)




module.exports = router