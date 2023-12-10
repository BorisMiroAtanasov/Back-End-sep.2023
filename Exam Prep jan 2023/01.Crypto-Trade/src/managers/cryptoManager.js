const Crypto = require('../models/Crypto')

exports.create = (cryptoData) => Crypto.create(cryptoData);

exports.getAll = () =>Crypto.find().populate('owner');

exports.getOne = (cryptoId) => Crypto.findById(cryptoId).populate('owner');

exports.edit = (cryptoId, cryptoData) => Crypto.findByIdAndUpdate(cryptoId, cryptoData);

exports.delete = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);
//1 вар.
exports.buy = async(userId, cryptoId) =>{
    const crypto = await Crypto.findById(cryptoId);
    crypto.buyers.push(userId) ;
    // TODO: check if user has already bought the crypto

    //await crypto.save();
   return crypto.save();
}

//2 вар. mongoose push
// exports.buy = async(userId, cryptoId) =>{
//     await Crypto.findByIdAndUpdate(cryptoId, {$push: {buyers: userId}})
// }