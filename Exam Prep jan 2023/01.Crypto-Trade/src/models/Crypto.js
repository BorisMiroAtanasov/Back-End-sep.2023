const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./User');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true , 'Name is requred'],
        minLength:[2, 'Name shoud be minimum two characters']
    },
    price: {
        type: Number,
        required:[true , 'Number shoud be positive'],
        min:1
        //match: [ /^https?:\/\//,"Invalid URL"],
            
        
    },
    cryptoImage: {
        type: String,
        required:[true , 'ImageUrl is requred'],
        match: [ /^https?:\/\//,"Invalid URL"],
            
        
    },
    description: {
        type: String,
        required:[true , 'Description is requred'],
        minLength:10,
        
    },
  
  
    owner: {
        type: mongoose.Types.ObjectId,
        ref:'User' ,
    },
    payment:
    { 
    type: String,
         enum: ["crypto-wallet", "credit-card", "debit-card", "paypal"]
        
    },

});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto