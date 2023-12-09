const router = require('express').Router();
const photoManager = require('../managers/photoManager')


router.get('/', (req, res) => {
   console.log(req.user); // only for check do we have auth user in request
   res.render('home')
});


router.get('/404', (req, res) =>{
    res.render('404')
});

router.get('/profile', async(req,res) =>{
    const userId = req.user._id
    const photos = await photoManager.getByOwner(userId).lean()


    res.render('profile', {photos, photoCount:photos.length})
})

module.exports = router