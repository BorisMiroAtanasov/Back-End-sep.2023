const mongoose = require("mongoose");

//schema
const dogSchema = new mongoose.Schema({
    name: {
        require: [true, "Name is required"], 
        type: String,
        minLength: 3,
        maxLength: 30
    },
    age: Number,
    color: String,
})
//methods
dogSchema.methods.bark = function () {
    console.log(`Dog with name ${this.name} has bark`);
    
}  

//Vitual properties (calculator properties)
dogSchema.virtual('description').get(function () {
    return `Dog name: ${this.name}, color:${this.color}, age: ${this.age}`
    
});

//static method 
dogSchema.static('getDogsCollection', function (age) {
    return this.find({age})
    
})


//model
const Dog = mongoose.model("Dog", dogSchema);
module.exports = Dog

