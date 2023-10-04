// const express = require("express");
// //Imports
// //const path = require("path");
// // const handlebars = require("express-handlebars");
// const handlebarsConfig = require("./config/handlebarsConfig");
// const expressConfig = require ("./config/expressConfig");
// const {PORT} = require("./constans");
// const routes = require('./router.js')
// //local variables
// const app = express();
// //const PORT = 5050;

// // Handlebars configuration
// // app.engine("hbs", handlebars.engine({ extname: "hbs" }));
// // app.set("view engine", "hbs");
// // app.set("views", "src/views");
// handlebarsConfig(app);
// expressConfig(app)


// //setup static files
// //const staticFile = express.static(( "src/public")) - first variant whitout "path"
// //const staticFile = express.static(path.resolve(__dirname, "public"));
// //app.use(staticFile);
// //Routing
// app.use(routes)


// app.listen(PORT, () => console.log(`Server is running on port : ${PORT}...`));


// Imports
const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const { PORT } = require("./constans");
const routes = require("./router");

// Local variables
const app = express();

// Configs
expressConfig(app);
handlebarsConfig(app);

// Routing
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));