const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true , 'User name is requred'],
        unique: true,
        minLength:2,
       
    },
    password: {
        type: String,
        required: [true, "Passwor is required"],
        minLength:4,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        minLength:10,
    },
});

userSchema.virtual('repeatPassword')
    .set(function (value) {
        if (this.password !== value) {
            throw new Error(`Passowr missmatch!`)
        }
    });

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    
})


const User = mongoose.model('User', userSchema);

module.exports = User;