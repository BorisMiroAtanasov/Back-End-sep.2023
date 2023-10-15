const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken')
const PORT = 5050;
const app = express();
const bcrypt = require('bcrypt')


app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const users = {

}


app.get("/", (req, res) => {
    const payload = { id: 123, username: "Pesho", age: 12 };
    const options = { expiresIn: "3d" };
    const secret = 'ourBiggestSecret'
// syncronius code
    const token = jwt.sign(payload, secret, options)
    res.send(token);
});

app.get("/verification/:token", (req, res) =>{
    const {token} = req.params;

    const result = jwt.verify(token, "ourBiggestSecret")
    console.log(result);

    res.send("OK")
})

app.get("/login", (req, res) => {
    res.send(`
    <h3>Login</h3>
    <form method="POST">
    <label for="username">Username</label>
    <input type="text" name="username">

    <label for="password">Password</label>
    <input type="password" name="password">

    <input type="submit" value="Submit">

</form>`)
});

app.get("/register", (req, res) => {
    console.log({ users });
    res.send(`
    <h3>Register</h3>
    <form method="POST">
    <label for="username">Username</label>
    <input type="text" name="username">

    <label for="password">Password</label>
    <input type="password" name="password">

    <input type="submit" value="Submit">

</form>`)
});
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const preservedHash = users[username]?.password;

    //                        removes the salt and compares pure hashes
    const isValid = await bcrypt.compare(password, preservedHash);

    if (isValid) {
        res.send("Successfuly Authenticate")
    } else {

        res.status(401).send("UnAuthorized! :(")
    }


})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;


    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)


    users[username] = { password: hash };

    console.log({ users });

    res.redirect('/login')
});

app.listen(PORT, () => console.log(`Server is listen ot port: ${PORT}...`));
