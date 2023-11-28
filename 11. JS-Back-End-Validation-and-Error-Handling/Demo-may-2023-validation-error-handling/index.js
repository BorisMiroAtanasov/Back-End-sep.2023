const express = require('express');
const validator = require('validator')

const { isAgeValid } = require('./utils/validations');
const { validateName } = require('./middlewares/miidlewares-validatae-name');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) =>{
    res.send(`
    <form method="POST">
    <label for="name">Name</label>
    <input type="text" name="name" id="name">

    <label for="age">Age</label>
    <input type="number" name="age" id="age">

    <label for="password">Password</label>
    <input type="password" name="password" id="password">

    <input type="submit" value="create">

</form>
    `)
});

app.post('/',validateName,  (req,res)=>{
    const {name, age, password} = req.body;

    // if(!name || name.length <=3){
    //    return res.send(`Invalid username`)
    // };

    if(!isAgeValid(age)){
       return res.send(`Invalid age`)
    }
    if(!validator.isStrongPassword(password)){
        return res.send(`Weak passwor`)
    
    }

    console.log(name, age);

    res.send('Succsessfull')
})

app.listen(5000, () => console.log(`Server is listeninig on port 5000...`))





// const express = require('express');
// //const validator = require('validator');

// const { isAgeValid } = require('./utils/validations');
// const { validateName } = require('./middlewares/middlewares');
// //const { body, validationResult } = require('express-validator');

// const app = express();

// app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//     res.send(`
//         <form method="POST">
//         <label for="name">Name</label>
//         <input type="text" name="name" id="name">

//         <label for="age">Age</label>
//         <input type="number" name="age" id="age">

      

//         <input type="submit" value="create" />
//     </form>
//     `);
// });


// app.post('/',
    

//     (req, res) => {
//         const { name, age } = req.body;

//           if(!name || name.lenght <=3){
//       return res.send(`Invalid username`)
//         };

//         if (!isAgeValid(age)) {
//             return res.send('Invalid age');
//         }


//         console.log(name, age);

//         res.send('Successfull');
//     });

// app.listen(5000, () => console.log('Server is listening on port 5000...'));
