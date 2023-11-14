const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name:{
        type: String,
        require : true,
    },
    age: Number,
    breed: String
});

dogSchema.methods.greed = function () {
    console.log(`Hello I am Dog, and my name is ${this.name}`);
}
const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog