const jwt = require('jsonwebtoken');
const util = require('util');

const jwtProsmises = {
    sign: util.promisify(jwt.sign),
    verify: util.promisify(jwt.verify)
};

module.exports = jwtProsmises