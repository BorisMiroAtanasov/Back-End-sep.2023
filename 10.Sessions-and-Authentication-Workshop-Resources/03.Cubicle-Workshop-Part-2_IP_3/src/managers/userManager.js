const User = require('../models/User')


exports.register = (userDate) => User.create(userDate);
