const express = require('express');
const app = express();
const port = 5000

//Routing
//app HTTP methods - GET, POST,PUT,PACHA, DELETE(the most used)
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
// wild card - оставяме най-накрая, изпълняват се последователно от горе на долу
app.get('*', (req,res) =>{
    res.status(404)
    res.send("Sorry page is not found :(")

});

app.listen(port, () => console.log(`Server is listen on port ${port}` ))