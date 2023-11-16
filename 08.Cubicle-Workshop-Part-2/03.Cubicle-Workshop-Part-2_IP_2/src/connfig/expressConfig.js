const express = require('express');
const path = require('path')

function expressConfig(app) {
app.use(express.static(path.resolve(__dirname,'../public'))); // middleware for static fails
app.use(express.urlencoded({extended: false})) //middleware for  body parser with extended: false if true - add guqry string 

}


module.exports = expressConfig