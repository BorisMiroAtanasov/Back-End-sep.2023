
const router = require('express').Router()

// const express = require('express');

// const router = express.Router() // new innstace of router

//routes

router.get('/', (req, res) =>{
    res.render("index");
});



// exports.getHome = (req, res) =>{
//     res.render("index")
// };
router.get('/about', (req, res) =>{
    res.render("about");
})

module.exports = router