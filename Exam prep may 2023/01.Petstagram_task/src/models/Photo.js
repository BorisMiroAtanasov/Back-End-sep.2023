const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./User');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true , 'Name is requred'],
    },
    image: {
        type: String,
        required:[true , 'ImageUrl is requred'],
    },
    age: {
        type: Number,
        required:[true , 'Age is requred'],
        
    },
    description: {
        type: String,
        required:[true , 'Description is requred'],
    },
    location: {
        type: String,
        required:[true , 'Location is requred'],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref:'User' ,
    },

});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo