const Furniture = require('../models/Furnitures');



exports.getAll = () => Furniture.find();

exports.create = (furnitureData) => Furniture.create(furnitureData);


exports.getOne = (furnitureId) =>Furniture.findById(furnitureId)


exports.updateOne = (furnitureId, furnitureData) => Furniture.findByIdAndUpdate(furnitureId,furnitureData)