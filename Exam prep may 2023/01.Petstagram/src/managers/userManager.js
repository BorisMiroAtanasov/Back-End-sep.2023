const User = require('../models/User')

exports.login = (username, password) =>{


    
};

exports.register = async(userData) => {
    const user = await User.findOne({username:userData.username }); // без await връща промис обект

    if(user){
        throw new Error ('Username already exists')
    }

    return User.create(userData);

}
    


