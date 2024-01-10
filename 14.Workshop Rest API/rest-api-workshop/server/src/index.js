const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const routes = require('./routes')


const app = express();
const PORT = 3030;

mongoose.connect("mongodb://127.0.0.1:27017/furnitures")
.then(() => console.log('Successfully conected to the DB'))
.catch((err) => console.log(`Error while connected to the DB:${err}`))

// middleware configuration
app.use(express.urlencoded({extended: false})) // ulrencodet, querystring
app.use(express.json()) // разчита application json files -> от AJAX requests
app.use(cors());
// app.use((req, res, next) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     res.setHeader('Access-Control-Allow-Headers', '*');

//     next()
// })



console.log('works');

app.get('/' , (req, res,next) => {

    res.send('Hello from Restful API')

});

app.use(routes)


app.listen(PORT, () => console.log(`Server is listening on port:${PORT}...`))

