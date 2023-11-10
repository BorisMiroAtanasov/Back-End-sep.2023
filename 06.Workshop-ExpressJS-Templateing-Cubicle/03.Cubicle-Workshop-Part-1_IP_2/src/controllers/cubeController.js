const router = require('express').Router();
const cubeManager = require('../managers/cubeManager')

// Path , is  /cubes/create (URL)
 router.get('/create', (req,res) =>{
    console.log(cubeManager.getAll());
    res.render('create')
 })


 router.post('/create', (req,res) =>{
    const {name , description, imageUrl, difficulty} = (req.body);


    cubeManager.create({name ,
         description,
          imageUrl, 
          difficulty: Number(difficulty)
        })
    res.redirect('/')
 })



module.exports = router