const express = require("express");
const cookieParser = require("cookie-parser");
const expressSession = require('express-session')
const { v4: uuid } = require("uuid");
const app = express();


app.use(cookieParser());
app.use(expressSession({
    secret: 'My secret',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false},
}))

app.get("/", (req, res) => {
  let id ;;

  const userId = req.cookies["userId"];
  if (userId) {
      id = userId;
      console.log(req.session.secret);
  } else {
    id = uuid();
    req.session.secret = `${id} - some secret`
    res.cookie("userId", id, {httpOnly: true});
  }

  res.send(`Hello user - ${id}`);
});

app.listen(5000, () => console.log("Server is listening om port 5000..."));
