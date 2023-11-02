const Creature = require('../models/Creature')


exports.create = (createData) => Creature.create(createData)

exports.getAll = () => Creature.find()

exports.singleCreature = (creatureId) => Creature.findById(creatureId)

exports.update = (creatureId,payload) => Creature.findByIdAndUpdate(creatureId,payload)



