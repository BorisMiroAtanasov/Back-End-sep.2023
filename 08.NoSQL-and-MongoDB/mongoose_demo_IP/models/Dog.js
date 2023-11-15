const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name:{
        type: String,
        require : true,
        minLength: 3,
        maxLength : 10,
    },
    breed: {
        type:string,
        require:false,
        enum :[koli, pudel, biegal],
    },
    age: Number,
    color: String
});
// instance method
dogSchema.methods.greed = function () {
    console.log(`Hello I am Dog, and my name is ${this.name}`); 
};

// virtual property
dogSchema.virtual('info').get(function () { 
    return `My name is ${this.name} and I am ${this.age} years old` 
    
});

// Static model method
dogSchema.static('giveMeCats' , function(){
    return this.find()
})
const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog