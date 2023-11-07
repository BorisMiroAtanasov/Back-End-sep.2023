const router = require('express').Router();

// Path , is  /cubes/create (URL)
 router.get('/create', (req,res) =>{
    res.render('create')
 })


 router.post('/create', (req,res) =>{
    console.log(req.body);
    res.redirect('/')
 })



module.exports = router