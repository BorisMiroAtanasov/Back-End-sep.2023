const router = require('express').Router();
const userManager = require ('../managers/userManager')


router.get('/login', (req, res) =>{
    res.render('users/login')
});

router.post('/login', async(req, res) =>{
    const {username, password} = req.body;
    const token = await userManager.login(username, password);

    res.cookie('token', token)// set cooke in response

    res.redirect('/')
});



router.get('/register', (req, res) =>{
    res.render('users/register')
});

router.post('/register', async(req, res) =>{
 
    const {username,email, password, repeatPassword } = req.body;
    await userManager.register({username,email, password, repeatPassword});


    res.send('registred')



})




module.exports = router