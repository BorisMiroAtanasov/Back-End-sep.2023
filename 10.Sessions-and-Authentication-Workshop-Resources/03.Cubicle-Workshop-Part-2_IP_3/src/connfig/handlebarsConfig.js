const handlebaars = require('express-handlebars');

function handlebarsConfig(app){
    // handlebars config
app.engine('hbs', handlebaars.engine({extname: 'hbs'}));
app.set('view engine', "hbs");
app.set("views", "src/views")
};

module.exports = handlebarsConfig