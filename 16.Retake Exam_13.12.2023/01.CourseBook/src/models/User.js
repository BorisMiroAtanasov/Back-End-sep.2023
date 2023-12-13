const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true , 'User name is requred'],
        minLength:2,
        unique: true,
    },
    password: {
        type: String,
        minLength:4,
        required: [true, "Passwor is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        minLength:10,
        unique: true,

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