const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, `User name is reqired`],
        minLength:5,// [5, `minimu 5 characters`],
        match:/^[A-Za-z0-9]+$/,
        unique: true
    }, 
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(value){
                return /^[A-Za-z0-9]+$/.test(value)
            },
            message: `Invalid password characters`
        },
        minLength: 8,
    }, 
});

//TO DO validate if user exsists 

userSchema.virtual('repeatPassword')
    .set(function(value){
        if( value != this.password){
            throw new mongoose.MongooseError('password missmatch!')
        }
    });

    userSchema.pre('save', async function(){
        const hash =  await bcrypt.hash(this.password, 10);
        this.password = hash
    })

const User = mongoose.model('User', userSchema);

module.exports = User;

