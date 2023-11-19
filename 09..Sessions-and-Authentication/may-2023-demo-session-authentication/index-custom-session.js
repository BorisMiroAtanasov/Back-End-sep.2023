const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuid } = require("uuid");
const app = express();

const session = {};

app.use(cookieParser());

app.get("/", (req, res) => {
  let id ;;

  const userId = req.cookies["userId"];
  if (userId) {
      id = userId;
      console.log(`User secret:`, session[userId].secret );
  } else {
    id = uuid();
    session [id] = {
        secret: 'My secret'
    }
    res.cookie("userId", id);
  }

  res.send(`Hello user - ${id}`);
});

app.listen(5000, () => console.log("Server is listening om port 5000..."));
