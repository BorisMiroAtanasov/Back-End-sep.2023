const express = require('express');


const app = express();
const PORT = 3030;

console.log('works');

app.get('/' , (req, res,next) => {

    res.send('Hello from Restful API')

})


app.listen(PORT, () => console.log(`Server is listening on port:${PORT}...`))

