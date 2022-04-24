const studentModel=require('../models/studentModel')
const mongoose= require('mongoose');

function getStudents()
{
    return studentModel.find()
}

function getStudentById(filter){
   return studentModel.findById(filter)
}

function deleteStudent(filter){
  return studentModel.deleteOne(filter)
}

function updateStudent(filter,set){
  return studentModel.findOneAndUpdate(filter,set)
}

module.exports={
    getStudents : getStudents,
    getStudentById:getStudentById,
    deleteStudent:deleteStudent,
    updateStudent:updateStudent
};




//Didn't use it------------------------------------------------------
// function insertMarks(){
//     const user=new  studentModel({
//         student_id:new mongoose.Types.ObjectId,
//         name:request.body.name,
//         roll_no:request.body.roll_no,
//         class:request.body.class
//       })
//      return user.save();
//     }

