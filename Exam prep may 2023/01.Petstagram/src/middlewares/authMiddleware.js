const jwt = require('../lib/jwt')
const {SECRET, TOKEN_KEY} = require('../config/config')

exports.auth =async (req,res, next) =>{
    const token = req.cookies[TOKEN_KEY] // има ли токен в cookies

    if(token){
        try {
           const decodedToken =  await jwt.verify(token, SECRET); // decodedToken = payload
            req.user= decodedToken;
            res.locals.user = decodedToken
            res.locals.isAuthenticated = true

           next()
        } catch (err) {

            //handle invalid token
            res.clearCookie(TOKEN_KEY);

            res.redirect('/users/login')
            
        }

    }else{
        next()
    }
};



exports.isAuth = (req,res, next) =>{
    if(!req.user){
       return res.redirect('users/login')
    }

    next()

};
