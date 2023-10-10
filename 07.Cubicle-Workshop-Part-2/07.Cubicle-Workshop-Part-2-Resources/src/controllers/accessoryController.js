const router = require('express').Router();
const accessoryService = require('./../service/accessoryService');



router.get("/create", (req , res) => {
res.render("accessory/create")
});

router.post("/create", (req, res) =>{
    const { name , description , imageUrl} = req.body;

    accessoryService.create({name , description , imageUrl})
})

module.exports = router;


