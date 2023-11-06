const express = require("express");
const handlebars = require('express-handlebars')
const path = require("path");
const app = express();
const {addCat,getCats} = require('./cats')
// Add handlebars to express
app.engine('hbs', handlebars.engine({extname: 'hbs'}));
app.set('view engine', 'hbs')

//Add Third party Middlewares
const bodyParser = (express.urlencoded({extended: false}))
app.use(bodyParser)

app.use(express.static("public"))


//Add Middlewares
app.use((req, res, next) => {
  console.log(`Middleware1`);
  next();
});
app.use((req, res, next) => {
  console.log(`HTTP Request  ${req.method} ${req.path}`);
  next();
});
// Partial Route  middlewares

app.use("/cats", (req, res, next) => {
  console.log(`Cats middleware`);
  next();
});
// Route specific middleware

const specificMiddleware = (req, res, next) => {
    console.log("Specific middleware only for this route");
    next()
  }

app.use(
  "/specific",specificMiddleware,(req, res) => {
    res.send(`Some specific route with middleware`);
  }
);
// Express router / Actions
app.get("/", (req, res) => {
  //res.send("Hello from Express!");
  //res.send({ name: "Pesho"});
  res.render('home' )
});

app.get("/about", (req, res) =>{
    res.render("About")
})

//Don not do like this
// app.get('/css/style.css', (req, res) =>{
//     res.sendFile(path.resolve(__dirname, "public/css/style.css"))
// })


// app.get("/cats", (req, res) => {
//     res.send(`
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="/css/style.css"/>

//     <title>Document</title>
// </head>
// <body>
//     <form method="POST">
// <label for="name">Name </label>
// <input type="text" id="name" name="name"/>
// <label for="age"> Age </label>
// <input type="number" id="age" name="age"/>
// <input type="submit" value="create"/>
//     </form>

//     </body>
// </html>
//     `)
//   //res.send("This page contain cats :)");
// });

app.get("/cats", (req, res) => {
    const cats = getCats()
    const firstCat = cats[0]
    res.render('cats' , {cats})
})

app.post("/cats", (req, res) => {

    addCat(req.body.name, Number(req.body.age),
    )
   // console.log(req.body);
 // res.status(201).send("Cat has been created");
 res.redirect('/cats')
});

app.get("/cats/:catsId", (req, res) => {
  const catId = Number(req.params.catsId);

  if (!catId) {
    res.status(404).send("Can not find a cat!");
    return;
  }

  res.send(`Request with parameter - ${req.params.catsId}`);
});

app.get("/download", (req, res) => {
  //res.download('./manual.pdf                // сваля pdf-а
  // res.attachment('./manual.pdf')           // сваля pdf-а
  // res.end();
  res.sendFile(path.resolve(__dirname, "./manual.pdf")); // отваря pdf директно в браузъра
});

app.get("/old-route", (req, res) => {
  res.redirect("/cats");
});

app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

// End of Express router
app.listen(5000, () => console.log("Server is listen on port 5000"));
