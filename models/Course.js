const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name:{
    type:String,
  },
  stream:{
    type:String,
  },
  teachers:{
    type:Array
  },
  coordinator:{
    type:String
  },
  students:{
    type:Array
  },
  academicYear:{
    type:String
}
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;