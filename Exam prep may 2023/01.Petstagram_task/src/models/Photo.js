const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./User');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true , 'Name is requred'],
        minLength:[2, 'Name shoud be minimum two characters']
    },
    image: {
        type: String,
        required:[true , 'ImageUrl is requred'],
        //match: [ /^https?:\/\//,"Invalid URL"],
            
        
    },
    age: {
        type: Number,
        required:[true , 'Age is requred'],
        min:1,
        max: 100,
        
    },
    description: {
        type: String,
        required:[true , 'Description is requred'],
        minLength:5,
        maxLength: 50,
    },
    location: {
        type: String,
        required:[true , 'Location is requred'],
        minLength:5,
        maxLength: 50,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref:'User' ,
    },
    comments:[
        {
            user: {
                type:mongoose.Types.ObjectId,
                required:true,
                ref: "User",
            },
            message:{
                type:String,
                required:[true, 'Comment message is required']
            }
        }
    ],

});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo