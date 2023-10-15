const User = require('../models/user')




exports.reister = (userData) => {
    return User.create(userData);

}