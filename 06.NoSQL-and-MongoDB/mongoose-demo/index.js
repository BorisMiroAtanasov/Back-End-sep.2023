const mongoose = require("mongoose");
const connectionStr = "mongodb://127.0.0.1:27017" //mongodb://localhost:27017

const dataBaseName = 'dogsDB'
const dog = require("./models/dog");


async function connectDb() {
 await mongoose.connect(`${connectionStr}/${dataBaseName}`);


   console.log(`You have been connectet to database: ${dataBaseName}`)
    
const dogId = "6521deacd76f3f9806c4718f"
   const dogs = await dog.find();

  //  dogs.forEach( dog=> dog.bark())

  //dogs.forEach(dog => console.log(dog.description))

  const d = await dog.getDogsCollection(3);
  console.log(d);
}
connectDb()



