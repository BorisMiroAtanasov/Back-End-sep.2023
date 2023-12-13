const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./User");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is requred"],
   // minLength: [2, "title shoud be minimum two characters"],
  },
  type: {
    type: String,
    required: [true, "type shoud be min one character"],
   // min: 1,
    //match: [ /^https?:\/\//,"Invalid URL"],
  },
  certificate : {
    type: String,
    required: [true, "image is requred"],
    //match: [/^https?:\/\//, "Invalid URL"],
  },

  image: {
    type: String,
    required: [true, "certificate is requred"],
   // match: [/^http?:\/\//, "Invalid URL"],
  },
  description: {
    type: String,
    required: [true, "Description must be minimum 10 character long"],
   // minLength: 10,
  },
  price: {
    type: Number,
    required:[true , 'Number shoud be positive'],
    //min:0
   
},

owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
 
  signUpList : [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
