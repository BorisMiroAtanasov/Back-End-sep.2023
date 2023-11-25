const { findOne } = require('../models/Cube');
const User = require('../models/User')
const bcrypt = require('bcrypt')


exports.register = (userDate) => User.create(userDate);


exports.login = async(username, password) => {
    //todo find user
    const user = await User.findOne({username});

    if(!user){
        throw new Error('Cannot find user or password')
    }

    //todo validate password
    const isValid = await bcrypt.compare(password , user.password)

    if(!isValid){
        throw new Error('Cannot find user or password')
    }
    //todo return user

    return  user;
}