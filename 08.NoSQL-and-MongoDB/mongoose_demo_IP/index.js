const mongoose = require('mongoose');
const Dog = require('./models/Dog')

async function connectDb (){
   await mongoose.connect('mongodb://127.0.0.1:27017/dogsDB');

   console.log("DB connected successfully")

   const dogs = await Dog.find({color: "orange"})

   dogs.forEach( dog => dog.greed())

}
connectDb()
