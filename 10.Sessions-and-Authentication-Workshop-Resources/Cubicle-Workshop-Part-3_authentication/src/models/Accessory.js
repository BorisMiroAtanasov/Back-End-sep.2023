const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

const accessorySchema= mogoose.Schema({
    name: String,
    imageUrl : String,
    description: String,
});

const Accessory = mongoose.model("Accessory", accessorySchema);


module.exports = Accessory;