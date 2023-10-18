const User = require("../models/user")

exports.register = (userData) => {
 User.create(userData)
}