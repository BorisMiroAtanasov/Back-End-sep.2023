const express = require('express');

const path = require('path');
const expressConfig = require('./connfig/expressConfig');
const handlebarsConfig = require('./connfig/handlebarsConfig');
const homeController = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')
const app = express();
const PORT = 5000;



expressConfig(app)
//require('./connfig/expressConfig')(app) - second variant
handlebarsConfig(app)

// app.get('/', homeController.getHome) - not good practise

app.use(homeController);
app.use('/cubes',cubeController);
app.get("*", (req, res) =>{
    res.redirect('/404')
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))