const router = require('express').Router();
const userManager = require ('../managers/userManager');
const {extractErrorMessage} = require ('../utils/errorHelpers')

router.get('/register', (req, res) =>{
    res.render('users/register')
});

router.post('/register', async(req, res) =>{
    const {username, password, repeatPassword} = req.body;

    try {
        
        await userManager.register({username, password, repeatPassword})
    
       // console.log(req.body);
    
        res.redirect('/users/login')
    } catch (err) {
        //const firstErrorMessage = Object.values(err.errors)[0].message
        //res.status(400).render('users/register', {errorMessage: firstErrorMessage})  // expected errors
        const errorMessages = extractErrorMessage(err)
       
        res.status(404).render('users/register', {errorMessages} );  
    }
});

router.get('/login', (req, res) =>{

    res.render('users/login')
});

router.post('/login',async (req, res) =>{

    const {username, password} = req.body;
    const token = await userManager.login(username, password);
    //console.log(token);

    res.cookie('auth',token, {httpOnly: true})
    res.redirect('/');

});

router.get('/logout', (req,res) =>{
    res.clearCookie('auth');
    res.redirect('/')
})

module.exports = router