const express = require('express');
const mongoose = require('mongoose')

const path = require('path');
const expressConfig = require('./connfig/expressConfig');
const errorHandler = require('./middlewares/errorHandlerMiddleware')
const dbConnect = require('./connfig/dbConfig')
const handlebarsConfig = require('./connfig/handlebarsConfig');

const routes = require('./routes')

const app = express();
const PORT = 5000;





expressConfig(app)
//require('./connfig/expressConfig')(app) - second variant
handlebarsConfig(app)

dbConnect()
    .then(() => console.log('DB connect successfuly'))
    .catch(err => {
        console.log('DB error: ', err.message);
    });


app.use(routes)

app.use(errorHandler)

// app.get('/', homeController.getHome) - not good practise

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))