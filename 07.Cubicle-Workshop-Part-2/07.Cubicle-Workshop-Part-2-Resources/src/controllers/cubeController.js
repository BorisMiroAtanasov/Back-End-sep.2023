const router = require("express").Router();
const cubeService = require("../service/cubeService");


router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  await cubeService.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });
  res.redirect("/");
});

router.get("/:cubeId/details", async(req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getSingleCube(cubeId).lean();
  //console.log(cube);

  if (!cube) {
    res.redirect("/404");
    return;
  }

  res.render("details", { ...cube });
});

module.exports = router;