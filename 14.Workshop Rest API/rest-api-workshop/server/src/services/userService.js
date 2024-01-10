const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


exports.register = (userData) => User.create(userData)

exports.login = async(userData) =>{
    const user = User.findOne({email});

    if(!user){
        throw new Error("Invalid email or password")
    };

    const isValid  = await bcrypt.compare(password, user.password);

    if(!isValid){
        throw new Error("Invalid email or password")
    };

    const payload = {};
    const token = jwt.sign(payload, "SOME_SECRET" , {expiresIn: '2d'}) //2d is too much for SPA
};