const router = require('express').Router()  //модулярен раутер
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController')

router.use(homeController);
router.use('/users',userController);
router.get('*', (req, res) =>{
    res.redirect('/404')
})



module.exports = router