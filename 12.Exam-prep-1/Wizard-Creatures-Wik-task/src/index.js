const express = require('express');
const handlebars = require('express-handlebars')


const path = require('path')
const {PORT} = require('./constants');
const routes  =require ('./router')


//Init
const app = express();

//Express congigurations
app.use(express.static(path.resolve(__dirname, "./public")))
app.use(express.urlencoded({extended: false}))

// Hanlebars configurations
app.engine('hbs', handlebars.engine({extname: "hbs"}));
app.set('view engine', 'hbs');
app.set('views', 'src/views')
 

//Routes
app.get("/" , (req, res) =>{
    //res.send("hello home page!")
    res.render('home')
});


app.use(routes)


app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));