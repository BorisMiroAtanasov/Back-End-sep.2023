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
};

dogSchema.virtual('info').get(function () {
    return `My name is ${this.name} and I am ${this.age} years old`
    
})
const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog