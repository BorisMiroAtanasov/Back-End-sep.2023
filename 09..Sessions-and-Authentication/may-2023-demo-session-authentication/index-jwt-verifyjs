const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { v4: uuid } = require("uuid");
const app = express();


app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

const users = {};



app.get("/", (req, res) => {
    console.log(users);

    const payloads = {_id: uuid(), usermane: 'Pesho'}
    const options = {expiresIn : '2d'}
    const secret = 'MySuperPrivetSecret';

    const token = jwt.sign(payloads, secret, options)

    res.send('token')

});

app.get('/verify/:token', (req, res) =>{
    const token = req.params.token;
   // console.log(req.params);
    //console.log(token);
    const payload = jwt.verify(token, 'MySuperPrivetSecret');

    console.log(payload);

    res.send('ok')
})


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
  
       const   salt = await bcrypt.genSalt(15);
    
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
        // generate jwt token

        // set jwt token as cookie
        res.redirect('/profile')
    }else{
        res.status(401).send('Unauthorized')
    }
    

})

app.listen(5000, () => console.log("Server is listening om port 5000..."));
