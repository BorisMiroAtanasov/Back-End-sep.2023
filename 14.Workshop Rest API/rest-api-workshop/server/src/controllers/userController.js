const router = require('express').Router();
const userService = require('../services/userService')

router.post('/register', async(req, res) =>{
    try {
        const {email , password} = req.body;
    
       const result =  await userService.register({email , password})
    
        res.json(result)
        
    } catch ({message}) {
        res.status(400).json({message})
    }
});

router.post('/login' , async(req ,res) =>{
    const {email , password} = req.body;
   

   try {
    const result = await userService.login({email , password});
    res.json(result)
   } catch ({message}) {
    res.status(400).json({message})
   }
})





module.exports = router