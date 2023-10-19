const jsonwebtoken = require('jsonwebtoken');
const {promisify} = require('util');


jsonwebtoken.sign
jsonwebtoken.verify

const jwt = {
    sign:promisify(jsonwebtoken.sign),
    vverify:promisify(jsonwebtoken.verify)

};

module.exports = jwt