const router = require('express').Router();
const photoManager = require('../managers/photoManager');
const {getErrorMessage} = require('../utils/errorHelpers')

router.get('/catalog' ,async(req,res) =>{
   const  photos = await photoManager.getAll().lean() // photoManager.getAll -> дава query, -> .lean() когато се ресолвне , ще даде чистия масив
    res.render('photos/catalog' , {photos})
})


router.get('/create' , (req, res) =>{

    res.render('photos/create')
});

router.post('/create' , async(req, res) =>{
    const photoData = {
        ...req.body,
        owner:req.user._id
    }

    try {
        await photoManager.create(photoData)
        res.redirect('/photos/catalog')
    } catch (err) {
        res.render('photos/create' , {error: getErrorMessage(err)} )
    }
    
});

router.get('/:photoId/details', async(req,res) =>{
    const photoId = req.params.photoId;
    const photo = await photoManager.getOne(photoId).lean();
    const isOwner = req.user?._id == photo.owner._id;


    res.render('photos/details',{photo, isOwner})

    });

    router.get('/:photoId/delete', async(req,res) =>{
        const photoId = req.params.photoId;

        try {
            await photoManager.delete(photoId)
            res.redirect('/photos/catalog')
        } catch (err) {
            res.render(`photos/details`, {error: 'Unseccessful deletion'})
            
        }
       
    
    
        });



module.exports = router