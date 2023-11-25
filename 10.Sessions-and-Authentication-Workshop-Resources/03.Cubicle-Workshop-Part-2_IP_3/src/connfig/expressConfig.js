const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const {auth} = require('../middlewares/authMiddleware');


function expressConfig(app) {
app.use(express.static(path.resolve(__dirname,'../public'))); // middleware for static fails
app.use(express.urlencoded({extended: false})) //middleware for  body parser with extended: false if true - add guqry string 
app.use(cookieParser());
app.use(auth);



}


module.exports = expressConfig