const express = require('express');

const app = express();


app.get('/', (req, res) => {

    res.send("Hello from Express!");
    //res.send({ name: "Pesho"});  
});

app.get('/cats', (req, res) => {

    res.send("This page contain cats :)");
});

app.post('/cats', (req, res) => {

    res.status(201).send("Cat has been created");
});

app.get('/cats/:catsId', (req, res) => {
    console.log(req.params);

    res.send(`Request with parameter - ${req.params.catsId}`);
});




app.get('*', (req, res) => {

    res.status(404).send("Not Found");
});


app.listen(5000, () => console.log("Server is listen on port 5000"));


