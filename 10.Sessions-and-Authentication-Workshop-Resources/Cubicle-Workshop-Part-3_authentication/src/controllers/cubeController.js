const router = require("express").Router();
const cubeService = require("../service/cubeService");
const accessoryService = require("./../service/accessoryService");
const {dificultyLevelOptionsViewData} = require('../utils/viewData')


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
    owner: req.user
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
const accessories = cube.accessories;
const hasAccessories =accessories=== undefined? false: accessories.length > 0;
  res.render("cube/details", { ...cube,accessories,hasAccessories });
});
//accessory atachment related
router.get("/:cubeId/attach-accessory",async(req, res) =>{
const {cubeId} = req.params
//console.log(req.params.cubeId)
const cube = await cubeService.getSingleCube(cubeId).lean();
//const accessoryIds = cube.accessories ?cube.accessories.map((a) => a._id) : [];
const accessories = await accessoryService.getWithoutOwned(cube.accessories).lean();

//console.log(accessoryIds);
const hasAccessory = accessories.length > 0 // view  data , template data
  res.render("accessory/attach", {cube, accessories, hasAccessory})
});

router.post("/:cubeId/attach-accessory", async (req, res) =>{
  // return Cube.findByIdAndUpdate({cubeId,{$push{accessories: accessoryId}}})
  const {cubeId} = req.params
  // console.log(cubeId);
  // console.log(req.body);
  const  {accessory: accessoryId} = req.body
  await cubeService.attachAccessory(cubeId,accessoryId)

  res.redirect(`/cubes/${cubeId}/details`)
});

router.get('/:cubeId/edit', async (req, res) =>{
  const {cubeId} = req.params;
const cube = await cubeService.getSingleCube(cubeId).lean();
const options = dificultyLevelOptionsViewData(cube.difficultyLevel);

//console.log({options});

  res.render("cube/edit", {cube,options})
});

router.post('/:cubeId/edit', async (req, res) =>{
  const {cubeId} = req.params
  const { name, imageUrl, difficultyLevel, description} = req.body;

  const payload = {name, imageUrl, difficultyLevel, description};

  await cubeService.update(cubeId, payload)

  res.redirect(`/cubes/${cubeId}/details`)
})

// router.post("/:cubeId/edit", async (req, res) => {
//   const { cubeId } = req.params;
//   const { name, imageUrl, difficultyLevel, description } = req.body;
//   const payload = { name, imageUrl, difficultyLevel, description };

//   await cubeService.update(cubeId, payload);

//   res.redirect(`/cubes/${cubeId}/details`);
// });

router.get('/:cubeId/delete', async(req, res) =>{
  const {cubeId} = req.params;
  const cube = await cubeService.getSingleCube(cubeId).lean();
  const options = dificultyLevelOptionsViewData(cube.difficultyLevel);
  
  res.render("cube/delete",{cube,options})
})

module.exports = router;