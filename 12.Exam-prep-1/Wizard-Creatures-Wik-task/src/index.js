const express = require('express');
const app = express();
const {PORT} = require('./constants');

app.use(express.urlencoded({extended: false}))
 
app.get("/" , (req, res) =>{
    res.send("hello home page!")
});


app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));