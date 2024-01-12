const Furniture = require('../models/Furnitures');



exports.getAll = () => Furniture.find();

exports.create = (furnitureData) => Furniture.create(furnitureData);
