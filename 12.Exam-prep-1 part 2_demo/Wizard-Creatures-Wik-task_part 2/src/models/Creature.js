const mongoose = require("mongoose");

const creatureSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 2 , unique: true},
  species: { type: String , required: true, minLength: 3 },
  skinColor: { type: String , required: true, minLength: 3 },
  eyeColor: { type: String, minLength: 3 },
  image: { type: String, required: true, match: [/^https?:\/\/.+/, "Provide valdi creature image link"]  },
  description:  { type: String , required: true, minLength: 3,  maxLength: 3 },
 votes: [{
    type: mongoose.Types.ObjectId,
    ref: "User"
 }],
  owner: {type: mongoose.Types.ObjectId , required: true,
    ref: "User"},
});

const Creature = mongoose.model("Creature", creatureSchema);

module.exports = Creature;
