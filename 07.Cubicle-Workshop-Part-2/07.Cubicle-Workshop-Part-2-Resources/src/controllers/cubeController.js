const router = require("express").Router();
const cubeService = require("../service/cubeService");
const accessoryService = require("./../service/accessoryService")


router.get("/create", (req, res) => {
  res.render("cube/create");
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

  res.render("cube/details", { ...cube });
});
//accessory atachment related
router.get("/:cubeId/attach-accessory",async(req, res) =>{
const {cubeId} = req.params
//console.log(req.params.cubeId)
const cube = await cubeService.getSingleCube(cubeId).lean();
const accessories = await accessoryService.getAll().lean();
const hasAccessory = accessories.length > 0 
  res.render("accessory/attach", {cube, accessories, hasAccessory})
});

router.post("/:cubeId/attach-accessory", async (req, res) =>{
  const {cubeId} = req.params
  // console.log(cubeId);
  // console.log(req.body);
  const  {accessory: accessoryId} = req.body
  await cubeService.attachAccessory(cubeId,accessoryId)

  res.redirect(`/cubes/${cubeId}/details`)
})

module.exports = router;