const router = require("express").Router();
const homeController = require("./controllers/homeControler.js");
const cubeController = require("./controllers/cubeControler.js");

router.use(homeController);
router.use("/cubes", cubeController);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;