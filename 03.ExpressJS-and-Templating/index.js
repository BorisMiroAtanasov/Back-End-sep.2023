const express = require('express');
const app = express();
const port = 5000

//Routing

app.get('/', (req,res) =>{
    res.send("Welcome this is the home page")

});
//Endpoint -> method, path ,Action
//method = get
//path = /kittens , route
//Action = (req,res) => (hendler)
app.get('/kittens', (req,res) =>{
    res.send("Hellow kittnes")

});

app.listen(port, () => console.log(`Server is listen on port ${port}` ))