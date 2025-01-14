const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema({
  name:{
    type:String,
  },
  grade:{
    type:String,
  },
  contactNumber:{
    type:Number,
  },
  father:{
    type:String
  },
  mother:{
    type:String,
  },
  email:{
    type:String,
  },
  address:{
    type:String,
  },
  photo:{
    type:String,
  }
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;