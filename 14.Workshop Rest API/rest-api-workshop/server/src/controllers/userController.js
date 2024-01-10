const router = require('express').Router();
const userService = require('../services/userService')

router.post('/register', async(req, res) =>{
    try {
        const {email , password} = req.body;
    
        await userService.register({email , password})
    
        res.json({message:"Registered successfully!"})
        
    } catch ({message}) {
        res.status(400).json({message})
    }
});

router.post('/login' , async(req ,res) =>{
    const {email , password} = req.body;
   

   try {
    await userService.login({email , password});
    res.json({message:"Loged in successfully!"})
   } catch ({message}) {
    res.status(400).json({message})
   }
})




module.exports = router