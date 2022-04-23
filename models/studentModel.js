const mongoose= require('mongoose');

//blueprint fields types
const userSchema = new mongoose.Schema({
    student_id:mongoose.Schema.Types.ObjectId,
    name: String,
    roll_no: String,
    class: String
  });

// Model class
  const userModel = mongoose.model('students', userSchema); 
   // pass the table name and schema name // it is a class  
  //it is used  to do db operations like find ,.delete ,update,read, get.save

module.exports=userModel;


//-------------------------------------------->
//  module.exports={                          
//   userModel:userModel,
//   studentModel:studentModel
// }

// let xyz=require('path')
// let userModel=xyz.userModel