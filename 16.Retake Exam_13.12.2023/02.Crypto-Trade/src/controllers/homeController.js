const router = require('express').Router();


router.get('/', (req, res) => {
   //console.log(req.user); // only for check do we have auth user in request
   res.render('home')
});


router.get('/404', (req, res) =>{
    res.render('404')
})

module.exports = router