const studentModel=require('../models/studentModel')
const mongoose= require('mongoose');

// dataTOsave is an object having key values that we need to d=save in database
 function createStudent(dataToSave){
  const user=new  studentModel(dataToSave)
  return  user.save();
}
// filter is an object eg: {name:"sakshi"}
function getStudent(filter){
    return studentModel.findOne(filter)
}

function getStudents(){
    return studentModel.find()
}
// id is a string 
function getStudentById(id){
   return studentModel.findById(id)
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
    updateStudent:updateStudent,
    createStudent,
    getStudent
};





