const express = require("express");
const app = express();
const path = require ('path')
const port = 5000;
// Middleware start
//globval middleware

app.use((req,res, next) => {
  console.log(`HTTP Request : ${req.method} , Request path: ${req.path}`)
next() // important 
});
//parshal routin middleware
app.use("/kittens", (req, res, next) => {
  console.log('Middleware hase been invoked !');
next()

});
// specific route middleware
const specificMiddleware = (req, res , next) =>{
  console.log("This is specifick routes middleware ")
  next() // next is important
  }



// Middleware end
//Routing
//app HTTP methods - GET, POST,PUT,PACHA, DELETE(the most used)
app.get("/kittens", (req, res) => {
  res.send([
    { id: 1, name: "Kircho1" },
    { id: 2, name: "Kircho2" },
    { id: 3, name: "Kircho3" },
    { id: 4, name: "Kircho4" },
    { id: 5, name: "Kircho5" },
  ]);
});
app.get("/", (req, res) =>{
  res.send('This is home page')
});

app.get("/specific",specificMiddleware ,(req, res)=> {
  res.send("This is specific route ! :)")
})

app.get("/kittens/:kittensId", (req, res) =>{
    const kittenId =Number(req.params.kittensId) 
console.log(req.params) // връща обект - ключ ( както сме кръстили пропъртито на обекта "kittensId" и стойността подадена от клиента - тя е динамична)

if(!kittenId){
    res.status(404).send(`Bad kitten ID!` + req.params.kittensId )
    return // if we don have return , we will don have the response below
}
    res.send({ id : kittenId, name: `Kircho`+ kittenId })
})
//Endpoint -> method, path ,Action
//method = get
//path = /kittens , route
//Action = (req,res) => (hendler)
app.post("/kittens", (req, res) => {
  res.send("Kitten has been created!");
});


app.get("/download-png", (req, res) => {
  //res.download - ends the streem by itself
 res.download("./postman.png")
 //res.attachment - you need to end the stree, because , we can attach more then 1 thing
//  res.attachment("./postman.png")
//  res.end()

// res.sendFile(path.resolve(__dirname,"./postman.png"))
});

app.get("/route-that-will-be-redirected", (req, res) => {


  res.redirect("/kittens")
})
// wild card - оставяме най-накрая, изпълняват се последователно от горе на долу
app.get("*", (req, res) => {
  res.status(404);
  res.send("Sorry page is not found :(");
});

app.listen(port, () => console.log(`Server is listen on port ${port}`));
