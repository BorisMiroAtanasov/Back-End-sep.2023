const router = require('express').Router();
const cryptoManager = require('../managers/cryptoManager');
const { getErrorMessage } = require('../utils/errorHelpers');
const { isAuth } = require('../middlewares/authMiddleware');
const {paymentMethodsMap} = require('../config/config')

router.get('/catalog', async (req, res) => {
    const cryptos = await cryptoManager.getAll().lean() // photoManager.getAll -> дава query, -> .lean() когато се ресолвне , ще даде чистия масив
    res.render('crypto/catalog', { cryptos }) //, {cryptos}
});

router.get('/create', isAuth, (req, res) => {

    res.render('crypto/create')
});

router.post('/create', isAuth, async (req, res) => {
    const cryptoData = {
        ...req.body,
        owner: req.user._id
    }

    try {
        await cryptoManager.create(cryptoData)
        res.redirect('/cryptos/catalog')
    } catch (err) {
        res.render('crypto/create', { error: getErrorMessage(err) })
    }

});

router.get('/:cryptoId/details', async (req, res) => {//async
    const cryptoId = req.params.cryptoId;
    // console.log(cryptoId);
    const crypto = await cryptoManager.getOne(cryptoId).lean();//.populate('comments.user')
    const isOwner = req.user?._id == crypto.owner._id; //  req.user?._id , ако няма user връща undefined
    //const isOwner = req.user?._id == crypto.owner;   //crypto.owner._id, защото сме популирали ;owner, иначе с toString()
    //const isOwner = req.user?._id === crypto.owner.toString();   //crypto.owner._id, защото сме популирали ;owner, иначе с toString()

    // console.log(req.user._id);
    // console.log(crypto.owner._id);
    //console.log(photo)
    const isBuyer = crypto.buyers?.some( id => id == req.user?._id)


    res.render('crypto/details', { crypto, isOwner,isBuyer })
});

router.get('/:cryptoId/buy', isAuth, async (req, res) => {
    const userId = req.user._id
    const cryptoId = req.params.cryptoId
    await cryptoManager.buy(userId, cryptoId)

    res.redirect(`/cryptos/${cryptoId}/details`)

});

router.get('/:cryptoId/edit', isAuth,async (req, res) => {
    const cryptoId = req.params.cryptoId;
    const crypto = await cryptoManager.getOne(cryptoId).lean();

    const paymentMethods = Object.keys(paymentMethodsMap).map(key =>({
        value: key, 
        label:paymentMethodsMap[key],
        isSelected: crypto.payment == key
    }));
   


    res.render('crypto/edit', { crypto, paymentMethods })//{photo, isOwner}
});


router.post('/:cryptoId/edit', isAuth,async (req, res) => {
    const cryptoId = req.params.cryptoId;
    const cryptoData = req.body;


    try {
        await cryptoManager.edit(cryptoId, cryptoData)
        res.redirect(`/cryptos/${cryptoId}/details`);

    } catch (err) {
        res.render(`crypto/details`, { error: `Unabel to update photo`, ...cryptoData })

    }


});

router.get('/:cryptoId/delete',isAuth ,async (req, res) => {

    const cryptoId = req.params.cryptoId;
    await cryptoManager.delete(cryptoId);

    res.redirect('/cryptos/catalog')


});

router.get('/search' , async(req,res) =>{

   // const crypto = await cryptoManager.getAll().lean()

     const {name, payment} = req.query;
  //console.log({name, payment})
     const crypto = await cryptoManager.search(name, payment)

    res.render('crypto/search', {crypto})
})



module.exports = router