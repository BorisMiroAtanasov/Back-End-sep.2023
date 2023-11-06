const express = require('express');
const cookieParser = require('cookie-parser')
const {v4: uuid} = require('uuid')
const PORT = 5050;
const app = express();

app.use(cookieParser())

app.get('/', (req, res) => {
    let id;
    const userId = req.cookies["userID"]
    
    // console.log({ cookie1 : req.header("Cookie")})
    // console.log({ cookie2 : req.headers[("cookie")]});

    //const cookie = req.cookies["cookie"];
// console.log({cookie:req.cookies });
//     console.log({ userId });


if(userId){
    id = userId;
    console.log(req.session)

}else{
    id = uuid();
   //req.session.secret = "This is secret"
    res.cookie("userID", id, {httpOnly: true})

}
   

   
    res.send('Ok! ID:' + id)
});

app.listen(PORT , ()=> console.log(`Server is listen ot port: ${PORT}...`));
