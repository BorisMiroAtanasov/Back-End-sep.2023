const express = require('express');
const handlebaars = require('express-handlebars');
const PORT = 5000;

const app = express();


// handlebars config
app.engine('hbs', handlebaars.engine({extname: 'hbs'}));
app.set('view engine', "hbs")


//routes
app.get('/', (req, res) =>{
    res.send("Hello from express")
});



app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))