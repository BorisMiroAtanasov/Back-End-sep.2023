const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const { SECRET } = require("../constants");

async function validatePassword(password, userPassword) {
  //validate password
  const isValid = await bcrypt.compare(password, userPassword);

  if (!isValid) {
    throw Error(`Invalid Email or password`);
  }
}
async function getToken(user) {
  const payload = { _id: user._id, emai: user.email };
  const token = await jwt.sign(payload, SECRET, { expiresIn: "3d" });

  return token;
}

exports.register = async (userData) => {
    const { password } = userData;
  const user = await User.create(userData);

  await validatePassword(password, user.password);

  const token = await getToken(user);
  //console.log(token);
  return token;
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  //validate user
  if (!user) {
    throw Error(`Invalid Email or password`);
  }
  await validatePassword(password, user.password);

  const token = await getToken(user);
  return token;
};
