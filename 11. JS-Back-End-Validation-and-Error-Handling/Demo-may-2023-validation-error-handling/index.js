const express = require('express')

const isAgeVAlid = require('./utils/validations')

const app = express();
app.use(express.urlencoded({extended:false}))
app.get('/', (req, res) =>{
    res.send(`
    <form method="Post">
    <label for="name">Name</label>
    <input type="text" name="name" id="name">

    <label for="age">Age</label>
    <input type="number" name="age" id="age">

    <input type="submit" value="create">

</form>
    `)
});

app.post('/', (req,res)=>{
    const {name, age} = req.body;

    if(!name || name.lenght <=3){
       return res.send(`Invalid username`)
    };

    if(!isAgeVAlid(age)){
        res.send(`Invalid username`)
    }

   

    console.log(name, age);

    res.send('Succsessfull')
})

app.listen(5000, () => console.log(`Server is listeninig on port 5000...`))