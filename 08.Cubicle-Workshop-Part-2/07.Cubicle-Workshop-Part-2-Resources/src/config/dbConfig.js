const mongoose = require("mongoose");
//const URL = "mongodb://127.0.0.1:27017/cubicle-sep-2023"     //conettionString
const {URL} = require("./../constants")

async function dbConnect() {
    await mongoose.connect(URL)
    
}


module.exports = dbConnect;

