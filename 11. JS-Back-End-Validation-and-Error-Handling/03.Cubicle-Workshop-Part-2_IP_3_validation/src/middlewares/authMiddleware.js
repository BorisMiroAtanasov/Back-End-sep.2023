const jwt = require("../lib/jwt");
const { SECRET } = require("../connfig/config");

exports.auth = async (req, res, next) => {
    const token = req.cookies["auth"];

    if (token) {
        // validate token
        try {
            const user = await jwt.verify(token, SECRET);
            req.user = user
            res.locals.user = user
            res.locals.isAuthenticate = true
            next()

        } catch (err) {
            res.clearCookie('auth')
            res.redirect('/users/login')

        }
    } else {
        next();

    }

};


exports.isAuth = (req, res, next) => {
    if(!req.user){
        return res.redirect('/users/login')
    }
    next()

}