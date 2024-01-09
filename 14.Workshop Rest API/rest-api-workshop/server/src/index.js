const express = require('express');
const routes = require('./routes')


const app = express();
const PORT = 3030;

console.log('works');

app.get('/' , (req, res,next) => {

    res.send('Hello from Restful API')

});

app.use(routes)


app.listen(PORT, () => console.log(`Server is listening on port:${PORT}...`))

