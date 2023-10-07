const mongoose = require("mongoose");

//schema
const dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String,
})


const Dog = mongoose.model("Dog", dogSchema);
module.exports = Dog

