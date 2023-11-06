
const jwt = require('jsonwebtoken');

// jwt.sign
// jwt.verify
const sign =(payload, secret, option) => {
    const promises = new Promise((resolve, reject) =>{

        jwt.sign(payload, secret, option, (err, result) =>{
            if(err){
               return reject(err)
            }
              return  resolve(result)
            
    
        });
       
    });
    return promises
}
const verify =(token, secret) => {const promises = new Promise((resolve, reject) =>{

    jwt.verify(token, secret, (err, result) =>{
        if(err){
           return reject(err)
        }
          return  resolve(result)
        

    });
   
});
return promises}

const jwtPromises = {
    sign,
    verify,
}

module.exports = jwtPromises;