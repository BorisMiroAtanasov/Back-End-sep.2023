const jwt = require('../lib/jwt')
const {SECRET} = require('../config/config')

exports.auth =async (req,res, next) =>{
    const token = req.cookies['token'] // има ли токен в cookies

    if(token){
        try {
           const decodetToken =  await jwt.verify(SECRET);

           next()
        } catch (err) {
            
        }

    }else{
        next()
    }
}