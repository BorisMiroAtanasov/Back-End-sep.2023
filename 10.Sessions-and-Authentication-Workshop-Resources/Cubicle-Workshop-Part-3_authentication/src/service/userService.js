const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const { SECRET } = require("../constants")

exports.reister = (userData) => {
    return User.create(userData);
};

exports.login = async (username, password) => {
    const user = await User.findOne({ username });
    //validate username
    if (!user) {
        throw new Error("Invalid username or password!");
    }
    //validate password
    const isValid = await bcrypt.compare(password, user.password);
    console.log({ isValid });
    console.log({ password1: password });
    console.log({ password2: user.password });

    if (!isValid) {
        throw new Error("Invalid username or password!");
    }

    const payload = {
        _id: user._id,
        username: user.username,
      };
    
      const token = await jwt.sign(payload, SECRET, { expiresIn: "3d" });
    
      return token;
};


// const payload = {
//     _id: user._id,
//     username: user.username,
//   };

//   const token = await jwt.sign(payload, SECRET, { expiresIn: "3d" });

//   return token;