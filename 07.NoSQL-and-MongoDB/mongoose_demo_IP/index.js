const mongoose = require('mongoose');
const Dog = require('./models/Dog');
const Person = require('./models/Persons')

async function connectDb() {
  await mongoose.connect('mongodb://127.0.0.1:27017/dogsDB');

  console.log("DB connected successfully")
  //Read
  //const dogs = await Dog.findOne()
  //const dogs = await Dog.find({color:orange})
  //const dogs = await Dog.findById(`65227890d76f3f9806c47192`)


  //Create method 1 
  // const newDog = new Dog({
  //   name: "buk",
  //   age: 2,
  //   color: "red",
    
  // });
  // newDog.save()

//Create method 2 
  // const newDog = await Dog.create({
  //   name: "Ch",
  //   age: 3,
  //   color: "Brown",
  // })


  //Update method 1
  // const lisko = await Dog.findOne({name: "Lisko"})
  // lisko.age = 10,
  // await lisko.save()

  //Update method 2
//const lisko = await Dog.updateOne({name: "Lisko"}, { $set: {age: 11}})

//Update method 3 the mongoose extension

//await Dog.findByIdAndUpdate("65229d70640a4fcaa3af69ac", { $set:{color: "blue"}})


// Delete method 1
//await Dog.deleteOne({name: 'Liiii'})

// Delete method 2
await Dog.findByIdAndDelete('65229e8425cd4e15aeeec97e')


  //console.log(lisko);
  //dogs.forEach( dog => dog.greed()) // instace method
  // dogs.forEach( dog => console.log(dog.info)); // virtual property
  //const result = await Dog.giveMeCats(); //static модел method

  //Creating collection by creating first  record in non existing coolection
  // await Person.create({
  //   name:'Pesho',
  //   age: 25,
  // });

  //find colection not equal to color orange

 //const notOrange =  await Dog.find({color: {$ne: 'orange'}}); //native query
 const notOrange  = await Dog.find().where('color').ne('orange') // mongoose query
 console.log(notOrange);

}
connectDb()
