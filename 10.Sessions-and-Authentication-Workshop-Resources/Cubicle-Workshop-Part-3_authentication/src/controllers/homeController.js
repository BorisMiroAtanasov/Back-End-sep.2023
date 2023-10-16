const router = require("express").Router();
const cubeService = require("../service/cubeService");
//const {isAuth} = require('../middlewares/authMiddleware')

router.get("/", async (req, res) => {
  const { search, from, to } = req.query;
  const cubes = await cubeService.getAll(search, from, to);

  const {user} = req;
  // console.log({user});
  
  res.render("index", { cubes, search, from, to });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;