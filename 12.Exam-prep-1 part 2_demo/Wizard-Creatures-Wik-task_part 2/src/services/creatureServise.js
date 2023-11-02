const Creature = require('../models/Creature')


exports.create = (createData) => Creature.create(createData);

exports.getAll = () => Creature.find();

exports.singleCreature = (creatureId) => Creature.findById(creatureId);

exports.update = (creatureId,payload) => Creature.findByIdAndUpdate(creatureId,payload);

exports.delete = (creatureId) => Creature.findByIdAndDelete(creatureId);

exports.getMyCreatures = (ownerId) => Creature.find({owner:ownerId})

