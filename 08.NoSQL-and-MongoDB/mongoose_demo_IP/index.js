const mongoose = require('mongoose');

async function connectDb (){
   await mongoose.connect('mongodb://127.0.0.1:27017/dogsDB');

   console.log("DB connected successfully")



}
connectDb()
