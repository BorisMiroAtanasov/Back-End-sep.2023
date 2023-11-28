exports.validateName = (req, res, next) =>{
    if(!req.body.name || req.body.name.lenght < 3 ){
        return res.status(404).send(`Invalid name`)

    }
    next();
};