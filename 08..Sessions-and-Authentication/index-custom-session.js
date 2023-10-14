const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuid } = require("uuid");
const PORT = 5050;
const app = express();
const session = {};

app.use(cookieParser());

app.get("/", (req, res) => {
  let id;
  const userId = req.cookies["userID"];

  if (userId) {
    id = userId;
    console.log({session});

  } else {
    id = uuid();

    session[id] = {
        secret: "my secret"
    }
    res.cookie("userID", id);
  }

  res.send("Ok! ID:" + id);
});

app.listen(PORT, () => console.log(`Server is listen ot port: ${PORT}...`));
