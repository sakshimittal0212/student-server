const studentModel=require('../models/studentModel')
const mongoose= require('mongoose');
// function insertMarks(){
//     const user=new  studentModel({
//         student_id:new mongoose.Types.ObjectId,
//         name:request.body.name,
//         roll_no:request.body.roll_no,
//         class:request.body.class
//       })
//      return user.save();
//     }


function getStudents()
{
    return studentModel.find()
}

function getStudentById(filter){
   return studentModel.findById(filter)
}

module.exports={
    getStudents : getStudents,
    getStudentById:getStudentById
}
    ;




//Didn't use it------------------------------------------------------


