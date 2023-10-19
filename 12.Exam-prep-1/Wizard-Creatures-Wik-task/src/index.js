const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')


const {PORT, DB_ULR} = require('./constants');
const routes  =require ('./router');


//local variables
const app = express();

//Express congigurations
app.use(express.static(path.resolve(__dirname, "./public")))
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())


// Hanlebars configurations
app.engine('hbs', handlebars.engine({extname: "hbs"}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');
 // DB conection

 async function dbConnect(){
    await mongoose.connect(DB_ULR)
 }
 dbConnect()
 .then(() => {
    console.log(`Successfuly connected to the database!`);
 })
 .catch(err => console.log(`Error wihle connecting to the DB. Error ${err}`));



//Routes
app.use(routes)


app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));