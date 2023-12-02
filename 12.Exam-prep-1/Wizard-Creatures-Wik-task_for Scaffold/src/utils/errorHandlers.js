const { MongooseError } = require("mongoose")

exports.extractMsgs = (error) =>{
    const isInstansOfMongoose = error instanceof MongooseError;

    if(isInstansOfMongoose){

        const errors = Object.values(error.errors)
        const msgs = errors.map( e => e.message)
    return msgs
    }
    return [error.message]

}