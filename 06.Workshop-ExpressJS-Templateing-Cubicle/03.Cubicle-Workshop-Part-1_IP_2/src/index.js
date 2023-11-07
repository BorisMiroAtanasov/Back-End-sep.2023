const express = require('express');

const path = require('path');
const expressConfig = require('./connfig/expressConfig');
const handlebarsConfig = require('./connfig/handlebarsConfig')
const app = express();
const PORT = 5000;



expressConfig(app)
//require('./connfig/expressConfig')(app) - second variant
handlebarsConfig(app)


//routes
app.get('/', (req, res) =>{
    res.render("index")
});



app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))