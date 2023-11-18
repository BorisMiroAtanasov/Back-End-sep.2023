const mongoose = require('mongoose')


const cubeSchema = new mongoose.Schema({

    id: String,
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]

});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;

