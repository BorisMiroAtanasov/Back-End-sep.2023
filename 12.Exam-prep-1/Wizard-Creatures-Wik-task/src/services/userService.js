const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const {SECRET} = require("../constants")

exports.register = (userData) => {
 User.create(userData)
};

exports.login = async(email, password) => {
    const user = await User.findOne({email});
//validate user
    if(!user){
        throw Error (`Invalid Email or password`)
    }

    //validate password
    const isValid= await bcrypt.compare(password,user.password);

    if(!isValid){
        throw Error (`Invalid Email or password`)

    };
    const payload = {_id:user._id, emai:user.email};
    const token = await jwt.sign(payload, SECRET, {expiresIn: "3d"})

    return token


}