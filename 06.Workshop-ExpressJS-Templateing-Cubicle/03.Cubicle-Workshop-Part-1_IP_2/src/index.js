const express = require('express');
const handlebaars = require('express-handlebars');
const path = require('path')
const app = express();
const PORT = 5000;

//express config
//app.use(express.static(path.resolve(__dirname,'public')));
app.use(express.static('src/public'));



// handlebars config
app.engine('hbs', handlebaars.engine({extname: 'hbs'}));
app.set('view engine', "hbs");
app.set("views", "src/views")


//routes
app.get('/', (req, res) =>{
    res.render("index")
});



app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))