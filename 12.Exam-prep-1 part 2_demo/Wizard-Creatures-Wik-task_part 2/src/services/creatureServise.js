const Creature = require('../models/Creature')


exports.create = (createData) => Creature.create(createData);

exports.getAll = () => Creature.find();

exports.singleCreature = (creatureId) => Creature.findById(creatureId).populate("votes");

exports.update = (creatureId,payload) => Creature.findByIdAndUpdate(creatureId,payload);

exports.delete = (creatureId) => Creature.findByIdAndDelete(creatureId);

exports.getMyCreatures = (ownerId) => Creature.find({owner:ownerId}).populate("owner");

exports.addVotesToCreature = async(creatureId, userId) => {
    const creature = await this.singleCreature(creatureId);
    
    const existingInVotes = creature.votes.some( v => v?.toString() === userId)
    //console.log(creature.votes.toString());
    if(existingInVotes){
        return
    }
    creature.votes.push(userId);
    return creature.save()

}

