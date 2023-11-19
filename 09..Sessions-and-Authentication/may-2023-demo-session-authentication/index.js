const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt')

const { v4: uuid } = require("uuid");
const app = express();


app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

const users = {};



app.get("/", (req, res) => {
    console.log(users);

    res.send('OK')

});


app.get('/register', (req,res) =>{


    res.send(`<form method="POST">
    <label for="username">Username</label>
    <input type="text" name="username" id="username">
    <label for="password">Password</label>
    <input type="password" name="password" id="password">
    <input type="submit" value="Register">
</form>`)
});

app.post('/register' , async(req, res) =>{

    const {username, password} = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password ,salt);

    users[username] = {
        password: hash
    };

    res.redirect('/login')


})

app.get('/login', (req,res) =>{


    res.send(`<form method="POST">
    <label for="username">Username</label>
    <input type="text" name="username" id="username">
    <label for="password">Password</label>
    <input type="password" name="password" id="password">
    <input type="submit" value="Login">
</form>`)
});

app.post('/login', async(req,res) =>{
    const {username, password} = req.body;

    const hash = users[username]?.password

    const isVAlid = await bcrypt.compare(password,hash)

    if (isVAlid){
        res.send('Successfuly logged in')
    }else{
        res.send('Unauthorized')
    }
    

})

app.listen(5000, () => console.log("Server is listening om port 5000..."));
