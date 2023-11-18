
const router = require('express').Router()
const cubeManager = require('../managers/cubeManager')

// const express = require('express');

// const router = express.Router() // new innstace of router

//routes

router.get('/', async(req, res) =>{
   const {search , from , to} = req.query;

    const cubes = await cubeManager.getAll(search , from , to)

    res.render("index" ,{cubes, search , from , to});
});





// exports.getHome = (req, res) =>{
//     res.render("index")
// };
router.get('/about', (req, res) =>{
    res.render("about");
});

router.get('/404', (req, res) =>{

    res.render('404')
});



module.exports = router