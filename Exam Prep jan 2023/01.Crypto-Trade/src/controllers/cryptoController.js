const router = require('express').Router();
const cryptoManager = require('../managers/cryptoManager');
const {getErrorMessage} = require('../utils/errorHelpers');
const {isAuth} = require('../middlewares/authMiddleware');

router.get('/catalog' ,(req,res) =>{
    //const  cryptos = await cryptoManager.getAll().lean() // photoManager.getAll -> дава query, -> .lean() когато се ресолвне , ще даде чистия масив
     res.render('crypto/catalog' ) //, {cryptos}
 });

 router.get('/create' , (req, res) =>{

    res.render('crypto/create')
});

router.post('/create' , async(req, res) =>{
    const cryptoData = {
        ...req.body,
        owner:req.user._id
    }

    try {
        await cryptoManager.create(cryptoData)
        res.redirect('/cryptos/catalog')
    } catch (err) {
        res.render('crypto/create' , {error: getErrorMessage(err)} )
    }
    
});

 module.exports = router