const mongoose = require("mongoose");
const connectionStr = "mongodb://127.0.0.1:27017" //mongodb://localhost:27017

const dataBaseName = 'dogsDB'
const dog = require("./models/dog");


async function connectDb() {
 await mongoose.connect(`${connectionStr}/${dataBaseName}`);


   console.log(`You have been connectet to database: ${dataBaseName}`)
    

   const dogs = await dog.find();

   console.log(dogs)
}
connectDb()



