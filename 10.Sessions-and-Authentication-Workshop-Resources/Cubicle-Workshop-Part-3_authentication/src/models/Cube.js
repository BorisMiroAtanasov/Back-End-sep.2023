const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  difficultyLevel: Number,

  accessories : [{
    type: mongoose.Types.ObjectId, // type from nongo
    ref: "Accessory" // the name of the model
  }],
  owner:{
    type: mongoose.Types.ObjectId,
    ref: 'Owner',
  }
  
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;