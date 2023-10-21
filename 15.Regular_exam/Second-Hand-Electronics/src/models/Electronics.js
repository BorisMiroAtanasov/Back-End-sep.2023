const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const electronicsSchema = new mongoose.Schema({
    'name':  String ,
    'type':  String ,
    'damages':  String ,
    'image':  String ,
    'description':  String ,
    'production':  Number ,
    'exploitation':  Number ,
    'price':  Number ,
     'buyingList': [{
        type: mongoose.Types.ObjectId,
        ref: "User"
     }],
     'owner':  {
        type: mongoose.Types.ObjectId,
        ref: "User"
     }

});



const Electronics = mongoose.model("Electronics",electronicsSchema );


module.exports = Electronics;