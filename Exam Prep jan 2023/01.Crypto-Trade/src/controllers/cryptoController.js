const router = require('express').Router();
const cryptoManager = require('../managers/cryptoManager');
const {getErrorMessage} = require('../utils/errorHelpers');
const {isAuth} = require('../middlewares/authMiddleware');

router.get('/catalog' ,async (req,res) =>{
    const  cryptos = await cryptoManager.getAll().lean() // photoManager.getAll -> дава query, -> .lean() когато се ресолвне , ще даде чистия масив
     res.render('crypto/catalog' , {cryptos}) //, {cryptos}
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

router.get('/:cryptoId/details', async(req,res) =>{//async
   const cryptoId = req.params.cryptoId;
  // console.log(cryptoId);
    const crypto = await cryptoManager.getOne(cryptoId).lean();//.populate('comments.user')
    const isOwner = req.user?._id == crypto.owner._id;
   // console.log(req.user._id);
   // console.log(crypto.owner._id);
    //console.log(photo)


    res.render('crypto/details',{crypto, isOwner})
    });

    router.get('/:cryptoId/edit', async(req, res) =>{
        const cryptoId = req.params.cryptoId;
        const crypto = await cryptoManager.getOne(cryptoId).lean()


        res.render('crypto/edit',{crypto})//{photo, isOwner}
    });

    router.get('/:cryptoId/delete' , async(req, res) =>{

        const cryptoId = req.params.cryptoId;
        await cryptoManager.delete(cryptoId);

        res.redirect('/cryptos/catalog')


    })

    router.post('/:cryptoId/edit', async(req,res) =>{
        const cryptoId = req.params.cryptoId;
        const cryptoData = req.body;

        
        try {
            await cryptoManager.edit(cryptoId,cryptoData)
            res.redirect(`/cryptos/${cryptoId}/details`);
            
        } catch (err) {
            res.render(`crypto/details`, {error: `Unabel to update photo`, ...cryptoData})
            
        }


    });




 module.exports = router