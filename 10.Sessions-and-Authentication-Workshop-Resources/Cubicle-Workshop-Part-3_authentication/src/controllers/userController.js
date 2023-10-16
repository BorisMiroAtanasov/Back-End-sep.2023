const router = require('express').Router();
const userService = require('../service/userService')


router.get("/register", (req, res) => {
  res.render("user/register")
});

router.post("/register", async (req, res) => {
 // console.log({userData: req.body});
 const {username,password,repeatPassword} = req.body
 await userService.reister({username,password,repeatPassword})
  res.redirect("/users/login")
})


router.get("/login", (req, res) => {
  res.render("user/login")
});

router.post("/login", async(req, res) => {
//find user
const {username, password} = req.body;
//console.log(username, '' , password);
const token = await userService.login(username, password)

res.cookie('auth', token, {httpOnly: true})
//compare password

  res.redirect('/')
});

router.get("/logout", (req, res) =>{
  res.clearCookie("auth")
  res.redirect("/")
})



module.exports = router;


