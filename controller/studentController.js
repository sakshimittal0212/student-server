const studentModel=require('../models/studentModel')
// const userModel=require('../models/userModel')
const mongoose= require('mongoose');

const studentDbService=require('../services/studentDbService');
const { response } = require('express');

const { getStudent,createStudent,getStudents,getStudentById,deleteStudent,updateStudent}=studentDbService;
// this is example of destructuring------
// const getStudents=studentDbService.getStudents;
// const getStudentById=studentDbService.getStudentById;
// const deleteStudent=studentDbService.deleteStudent;
// const updateStudent=studentDbService.updateStudent;
const utilsFile=require('../helpers/utils');
const res = require('express/lib/response');

let insertStudentController=async function (request,response){
  
    try {
     let studentExist= await getStudent({roll_no:request.body.roll_no})
     console.log(studentExist);
     if(studentExist){
       return response.status(400).json({err:"roll no already exist"})
     }
     let result= await createStudent({
      name:request.body.name,
      roll_no:request.body.roll_no,
      class:request.body.class
    });
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

let deleteStudentController=async function(req,res){
  console.log(req.params.id);
  try {
    let result=await deleteStudent({_id: req.params.id})
    res.status(200).json({
      message: "deleted successfully",
      studentData:result})
  } catch (error) {
    res.status(500).json({err:error})
  }
}

let updateStudentController=async function(req,res){
  try {
    let result=await updateStudent({_id:req.params.id},{
      $set:{
        name:req.body.name,
        roll_no:req.body.roll_no,  
      }
    })
    res.status(200).json({data:result })
  } catch (error) {
    res.status(500).json({err:error})
  }
}

// let loginController=async function (request,response){
//   const user=new  userModel({
//       _id:new mongoose.Types.ObjectId,
//       name:request.body.name,
//       email:request.body.email,
//       phoneNo:request.body.phoneNo
//     })
//   try {
//    let result= await user.save();
//    response.status(200).json({newUser:result})  
//  } catch (error) {
//    console.log(error);
//    response.status(404).json({err:error})
//  }
// } 

let signUpController=function(req,res){
  console.log(req.body.phoneNo);
  try {
    let otp=utilsFile.generateOtp(5)
    res.status(200).json({result:otp}) 
    
  } catch (error) {
    res.status(500).json({ err:"server error"})
  }
}
 
let generateTokenController=function(req,res){
  console.log(req.body.phoneNo);
  try {
    let token=utilsFile.generateToken({phoneNo:req.body.phoneNo})
    res.status(200).json({result:token}) 
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ err:"server error"})
  }
}

let decodeTokenController=function(req,res){
  console.log(req.body.token);
  try {
    let token=utilsFile.decodeToken(req.body.token)
    res.status(200).json({result:token}) 
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ err:"server error"})
  }
}

let generateHashController=function(req,res){
  console.log(req.body.password);
  try {
    const saltRounds = 10;
    let hashCode=utilsFile.generateHash(req.body.password,saltRounds)
    res.status(200).json({result:hashCode}) 
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ err:"server error"})
  }
}

let compareHashController=function(req,res){
  console.log(req.body.password);
  try {
    let hashCode=utilsFile.compareHash(req.body.password,req.body.hash)
    console.log(hashCode);
    res.status(200).json({result:hashCode}) 
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ err:"server error"})
  }
}


module.exports={
    insertStudentController,   //when key name and values variable name is same then we can directly write variable name
    getStudentController,      // key name =variable name and value will be variable value
    getStudentByIdController:getStudentByIdController,
    deleteStudentController:deleteStudentController,
    updateStudentController:updateStudentController,
    signUpController:signUpController,
    generateTokenController:generateTokenController,
    decodeTokenController:decodeTokenController,
    generateHashController,
    compareHashController
}
    ;
  