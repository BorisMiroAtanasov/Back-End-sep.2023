const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secret = 'alabalasecret'

const { v4: uuid } = require("uuid");
const app = express();


app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

const users = {};



app.get("/", (req, res) => {


    res.send('Hello')

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
        const payload = {username }
        jwt.sign(payload , secret , {expiresIn : '2d'}, (err, token) => {
            if(err){
                return res.redirect('404')
            }
            // set jwt token as cookie
            res.cookie('token', token)
            res.redirect('/profile')
        });

    }else{
        res.status(401).send('Unauthorized')
    }
});

app.get('/profile', (req, res) =>{

    // get token
    const token = req.cookies.token

    //verify token
    if(token){
        jwt.verify(token, secret, (err, payload) =>{
            if (err){
               return res.status(401).send('Unauthorized')
            }

            //allow request if valid
            return res.send(`profile: ${payload.username}`)
        });

    }
    res.redirect('/login')

})



app.listen(5000, () => console.log("Server is listening om port 5000..."));
