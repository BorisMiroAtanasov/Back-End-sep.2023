const router = require("express").Router();
const homeController = require("./controllers/homeController.js");
const cubeController = require("./controllers/cubeController.js");
const accessoryController = require("./controllers/accessoryController.js")
const usersController = require("./controllers/userController.js")

router.use(homeController);
router.use("/cubes", cubeController);
router.use("/accessory", accessoryController)
router.use("/users", usersController)

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;