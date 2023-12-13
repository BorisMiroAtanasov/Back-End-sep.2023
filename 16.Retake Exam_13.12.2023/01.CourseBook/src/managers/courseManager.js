const Course = require('../models/Course');



exports.create = (courseData) => Course.create(courseData);

exports.getAll = () => Course.find();

exports.getOne = (courseId) => Course.findById(courseId);

exports.edit = (courseId, courseData) => Course.findByIdAndUpdate(courseId, courseData) //{runValidators:true}


exports.delete = (courseId) => Course.findByIdAndDelete(courseId);

exports.getByOwner = (userId) =>Course.find({owner:userId})
