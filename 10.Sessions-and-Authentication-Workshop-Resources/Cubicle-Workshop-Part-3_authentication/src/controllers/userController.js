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



module.exports = router;


