
const router = require('express').Router()
const cubeManager = require('../managers/cubeManager')

// const express = require('express');

// const router = express.Router() // new innstace of router

//routes

router.get('/', (req, res) =>{

    const cubes = cubeManager.getAll()
    res.render("index" ,{cubes});
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