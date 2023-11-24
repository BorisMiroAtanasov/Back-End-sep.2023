const Accessory = require('../models/Accessory')


exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getAll = () => Accessory.find()

exports.getOthers = (accessoriesIds) => Accessory.find({_id: {$nin: accessoriesIds}})