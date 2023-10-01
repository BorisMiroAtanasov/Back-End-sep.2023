const express = require("express");
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");
const PORT = 5050;

// Handlebars configuration
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

//setup static files
const staticFile = express.static(path.resolve(__dirname, "public"));
app.use(staticFile);

app.get("/", (req, res) => {
  //res.send("Hello from express server!")
  res.render("index");
});

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}...`));
