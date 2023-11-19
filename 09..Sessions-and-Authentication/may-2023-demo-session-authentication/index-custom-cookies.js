const express = require('express');
const {v4: uuid} = require('uuid')
const app = express();



app.get('/', (req, res) =>{
    let id = uuid()
    // console.log(req.header('Cookie'));
    // console.log(req.headers);
    const cookie = req.header('Cookie')
    if(cookie){
    const [key, value] = cookie.split('=')
    id = value;
    }else{
        res.header('Set-Cookie', `userId =${id}`)

    }

    res.send(`Hello user - ${id}`)

});

app.listen(5000, () => console.log('Server is listening om port 5000...'))


