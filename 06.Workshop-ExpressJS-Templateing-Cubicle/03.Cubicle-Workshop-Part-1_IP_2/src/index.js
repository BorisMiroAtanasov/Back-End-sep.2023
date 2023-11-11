const express = require('express');

const path = require('path');
const expressConfig = require('./connfig/expressConfig');
const handlebarsConfig = require('./connfig/handlebarsConfig');

const routes = require('./routes')

const app = express();
const PORT = 5000;



expressConfig(app)
//require('./connfig/expressConfig')(app) - second variant
handlebarsConfig(app)
app.use(routes)

// app.get('/', homeController.getHome) - not good practise




app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))