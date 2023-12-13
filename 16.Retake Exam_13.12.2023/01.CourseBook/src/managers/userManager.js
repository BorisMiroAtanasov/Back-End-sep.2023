const { request } = require('express');
const User = require('../models/User')
const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt');
const {SECRET} = require('../config/config')
//const SECRET = `a34a2f56-554d-4a05-8f35-c8e17a0076d8`

exports.login = async(email, password) =>{
    // find user by user name 

    const user = await User.findOne({email});

    if(!user){
        throw new Error(`Invalid email or password`)
    };
    // check password 
    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid){
        throw new Error(`Invalid email or password`)
    };

//     const payload = {
//         _id: user._id,
//         username: user.username,
//         email:user.email,
//     }
//    const token =  await jwt.sign(payload, SECRET, {expiresIn: '2d'})

//     return token
        const token = await generateToken(user);
        return token
};

exports.register = async(userData) => {
    const user = await User.findOne({username:userData.username }); // без await връща промис обект

    if(user){
        throw new Error ('Username already exists')
    }
    const createdUser = await User.create(userData);
    const token = await generateToken(createdUser)
    return token
}

async function generateToken(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email:user.email,
    }
   const token =  await jwt.sign(payload, SECRET, {expiresIn: '2d'})

    return token
}
    


