const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuid } = require("uuid");
const session = require('express-session')
const PORT = 5050;
const app = express();


app.use(cookieParser());
app.use(session({
    secret: "My biggest secret ever",
    resave: false,
    cookie: {secure:false}
}))

app.get("/", (req, res) => {
  let id;
  const userId = req.cookies["userID"];

  if (userId) {
    id = userId;
    console.log( req.session);

  } else {
    id = uuid();

   
    req.session.message = "Test 123"
    res.cookie("userID", id);
  }

  res.send("Ok! ID:" + id);
});

app.listen(PORT, () => console.log(`Server is listen ot port: ${PORT}...`));
