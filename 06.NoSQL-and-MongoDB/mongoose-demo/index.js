const mongoose = require("mongoose");
const connectionStr = "mongodb://127.0.0.1:27017" //mongodb://localhost:27017

const dataBaseName = 'dogsDB'
//const dog = require("./models/dog");
const Dog = require("./models/dog");


async function connectDb() {
 await mongoose.connect(`${connectionStr}/${dataBaseName}`);


   console.log(`You have been connectet to database: ${dataBaseName}`)
    //Static,, virtual methods
//const dogId = "6521deacd76f3f9806c4718f"
  // const dogs = await dog.find();
  //  dogs.forEach( dog=> dog.bark())
  //dogs.forEach(dog => console.log(dog.description))
  // const d = await Dog.getDogsCollection(3);
  // console.log(d);

//CREATE
//Variant  1 
 const newDog = new Dog({name: "Liiii", age: 5, color:"orange"});
// //console.log(newDog);
 newDog.save()
//Variant 2
//const newDog = await Dog.create({name: "Sharen", age: 1, color:"colorful"})



//READ
const dogs = await Dog.find()
//const dogs = await Dog.find({age:2})
//const dogs = await Dog.findOne({age:2})
// const dogId = "65227890d76f3f9806c47193"
// const dogs = await Dog.findById(dogId)
 //console.log(dogs);

//UPDATE

//Vraiant 1 
// await Dog.updateOne(
//   {name:"Bucki"}, 
//   {$set: {age:4}},//dolar-sing sintax is from native mongodb
  //{ {age:4}//mongoos way
  // )

// Variant 2 
// const dogId ="65229e8425cd4e15aeeec97e";
// const dog = await Dog.findById(dogId);
// dog.age= -1;
// dog.color = "transperant"
// dog.save();

// Variant 3 
//await Dog.findByIdAndUpdate(dogId, {age:50})


  //DELETE
  //Variant 1 
  //await Dog.deleteOne({name :"Lisko"})

// Variant 2
  //const dogId ="65229fdf14e31ebf2ceb2ff3"
  //await Dog.findByIdAndDelete(dogId)
console.log(dogs);


}
connectDb()














// // FROM THE DB
// const DB_DOGS = [
//   {
//     _id: "6513077a36a392a6dde84a",
//     name: "Johny",
//     age: 12,
//     color: "white",
//   },
//   {
//     _id: "6513077a36a33eea6dde84a",
//     name: "Roshko",
//     age: 4,
//     color: "black",
//   },
//   {
//     _id: "65130136a396eea6dde84a",
//     name: "Pesho",
//     age: 1,
//     color: "brown",
//   },
// ];

// // THEN WHEN THEY ARE FETCHED, THEY ARE MAPPED WITH THE SCHEMA
// const transformedDbDogs = DB_DOGS.map((dog) => {
//   return {
//     ...dog,
//     getDescription: function () {
//       return `This dog is called ${this.name} !`;
//     },
//   };
// });

// // when all ready
// transformedDbDogs.forEach((dog) => console.log(dog.getDescription()))



