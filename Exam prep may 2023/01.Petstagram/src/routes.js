const router = require('express').Router()  //модулярен раутер
const homeController = require('./controllers/homeController')

router.use(homeController)



module.exports = router