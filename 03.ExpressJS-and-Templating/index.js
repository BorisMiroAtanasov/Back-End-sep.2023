const express = require("express");
const app = express();
const port = 5000;

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
app.get("/kittens/:kittensId", (req, res) =>{
    const kittenId =Number(req.params.kittensId) 
if(!kittenId){
    res.status(404).send(`Bad kitten ID!` + req.params.kittensId )
    return
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
// wild card - оставяме най-накрая, изпълняват се последователно от горе на долу
app.get("*", (req, res) => {
  res.status(404);
  res.send("Sorry page is not found :(");
});

app.listen(port, () => console.log(`Server is listen on port ${port}`));
