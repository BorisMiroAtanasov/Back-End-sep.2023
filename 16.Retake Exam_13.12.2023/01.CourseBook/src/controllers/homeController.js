const router = require('express').Router();
const courseManager = require('../managers/courseManager');
const { isAuth } = require('../middlewares/authMiddleware');


router.get('/', async(req, res) => {
  // console.log(req.user); // only for check do we have auth user in request
  let courses = await courseManager.getAll().lean()
  let number  = courses.length;
  //console.log(number);
  if(number > 3 ){
    courses = courses.slice(-3)
    
  }

  //console.log(courses.length);
   res.render('home',{courses})
});


router.get('/404', (req, res) =>{
    res.render('404')
});


router.get('/profile',isAuth, async(req,res) =>{
  const userId = req.user._id
  const courses = await courseManager.getByOwner(userId).lean()
  const coursesCountCreate = courses.length
  //coursesSign = req.user._id
//  const coursesCountSignUp = coursesSign.length
   


  res.render('profile', {courses,coursesCountCreate })
})

module.exports = router