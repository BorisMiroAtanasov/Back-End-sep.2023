const Electronics = require('../models/Electronics')

exports.create = (electronicsData) =>{
    Electronics.create(electronicsData)

}

exports.getAll = () => Electronics.find();


exports.singleDevice = (electronicsId) => Electronics.findById(electronicsId);

exports.update = (electronicsId, creataData) =>Electronics.findByIdAndUpdate(electronicsId, creataData)


