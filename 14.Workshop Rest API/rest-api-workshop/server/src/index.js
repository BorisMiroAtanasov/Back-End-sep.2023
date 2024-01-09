const express = require('express');
const cors = require('cors')

const routes = require('./routes')


const app = express();
const PORT = 3030;


// middleware configuration
app.use(express.urlencoded({extended: false}))
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

