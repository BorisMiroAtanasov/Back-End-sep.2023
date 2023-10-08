// Imports
const express = require("express");
//const handlebarsConfig = require("../config/handlebarsConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const dbConnect = require("./config/dbConfig")


const { PORT } = require("./constants");
const routes = require("./router");
// connectin to the DB
dbConnect()
.then(() => {
    console.log(`Sucsessfulu connected to the DB`);
})
.catch(err => console.log(`Error while connect with DB: ${err}`))

// Local variables 
const app = express();

// Configs
expressConfig(app);
handlebarsConfig(app);

// Routing
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));