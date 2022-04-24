const studentDbService=require('../services/studentDbService')
const getStudents=studentDbService.getStudents;
const getStudentById=studentDbService.getStudentById;
const studentModel=require('../models/studentModel')
const mongoose= require('mongoose');

let insertStudentController=async function (request,response){
    const user=new  studentModel({
        student_id:new mongoose.Types.ObjectId,
        name:request.body.name,
        roll_no:request.body.roll_no,
        class:request.body.class
      })
    try {
     let result= await user.save();
     response.status(200).json({newUser:result})  
   } catch (error) {
     console.log(error);
     response.status(404).json({err:error})
   }
} 

let getStudentController= async function(request,response){
    try {
      let result= await getStudents();
      response.status(200).json({studentData:result})  
    } catch (error) {
      console.log(error);
      response.status(500).json({error:err})
    }
 }

let getStudentByIdController= async function(req,res){
  console.log(req.params.id);
  try {
    let result=await getStudentById(req.params.id);
    res.status(200).json({studentData:result})
  } catch (error) {
    res.status(500).json({err:error})
  }
}


module.exports={
    insertStudentController : insertStudentController,
    getStudentController:getStudentController,
    getStudentByIdController:getStudentByIdController
}
    ;
  