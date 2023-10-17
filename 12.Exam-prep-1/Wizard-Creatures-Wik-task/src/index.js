const express = require('express');
const path = require('path')
const {PORT} = require('./constants');


//Init
const app = express();

//Express congigurations
app.use(express.static(path.resolve(__dirname, "./public")))
app.use(express.urlencoded({extended: false}))
 

//Routes
app.get("/" , (req, res) =>{
    res.send("hello home page!")
});


app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));