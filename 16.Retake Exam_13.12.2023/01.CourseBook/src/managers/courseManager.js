const Course = require('../models/Course');



exports.create = (courseData) => Course.create(courseData);

exports.getAll = () => Course.find().populate('owner');

exports.getOne = (courseId) => Course.findById(courseId).populate('owner');;

exports.edit = (courseId, courseData) => Course.findByIdAndUpdate(courseId, courseData) //{runValidators:true}


exports.delete = (courseId) => Course.findByIdAndDelete(courseId);

exports.getByOwner = (userId) =>Course.find({owner:userId});


exports.signUp = async(userId, courseId) =>{
    const course = await Course.findById(courseId);
    course.signUpList.push(userId) ;
    // TODO: check if user has already bought the crypto

    //await crypto.save();
   return course.save();
};
