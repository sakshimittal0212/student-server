const markDbService=require('../services/markDbService')
const maxMarks=markDbService.maxMarks;
const minMarks=markDbService.minMarks;
const getMarks=markDbService.getMarks;
//---------------------------------------------------------------------------------------------------------------------
let  avgMarksAsyncController = async function(req,res){
    console.log(req.params.studentId)
    try {
        console.log('We r going to call service');
        let result = await getMarks({ student_id: req.params.studentId })
        console.log('We got the result');
        // let result = await marksModel.find({ student_id: req.params.studentId })
        let avg=500;                                               //in result parameter we will get the resolved data
        let totalObtainedMarks=0;
        let totalSubjects=0;
        result.forEach(function (markObj,index){
          totalObtainedMarks+=markObj.marks_obtained;
          totalSubjects++;
        })
        console.log('total and max: '+totalObtainedMarks,totalSubjects)
        avg=totalObtainedMarks/totalSubjects;
        console.log("result")
        res.status(200).json({
          data:{
            avgMarks:avg
          }
        })
    }
    catch (error) {
        console.log(error)
    }
}

let avgMarksPromiseController=function(req,res){
    console.log(req.params.studentId)
   let marksPromise= getMarks({
    student_id:req.params.studentId
    })
    marksPromise.then(function(result){
      let avg=500;                                               //in result parameter we will get the resolved data
      let totalObtainedMarks=0;
      let totalSubjects=0;
      result.forEach(function (markObj,index){
        totalObtainedMarks+=markObj.marks_obtained;
        totalSubjects++;
      })
      console.log(totalObtainedMarks,totalSubjects)
      avg=totalObtainedMarks/totalSubjects;
      console.log(result)
      res.status(200).json({
        data:{
          avgMarks:avg
        }
      })
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({
        error: "server error"
      })
    })
  }

let getMarksController=async function(req,res){
  try {
      let result=await getMarks()
      res.status(200).json({data:result})
      
  } catch (error) {
      console.log(error);
      res.status(500).json({error:err})
  }
}

let maxMarksController=async function(req,res){
  console.log(req.params.subjectId)
  try {
    let result=await maxMarks({subject_Id:req.params.subjectId})
    var maxNumber=0;
    result.forEach(function (value){
      if(maxNumber < value.marks_obtained){
          maxNumber=value.marks_obtained;
          
      }
    })
    console.log(maxNumber)
    console.log(result)
    res.status(200).json({
      data:{
        maxNo : maxNumber
      }
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      err:error
    })
  }
}

let minMarksController=async function(req,res){
  console.log(req.params.subjectId)
  try {
    let result=await minMarks({subject_Id:req.params.subjectId})
    var minNumber=result[0].marks_obtained;                        
    result.forEach(function (value){
      if(minNumber > value.marks_obtained){
          minNumber=value.marks_obtained;  
         // console.log(minNumber)
      }
    })
    console.log(minNumber)
    res.status(200).json({
      data:{
        minNo : minNumber
      }
    })
  } catch (error) {
    res.status(500).json({
      err:error
    })
  }
}

module.exports={
    avgMarksAsyncController:avgMarksAsyncController,
    avgMarksPromiseController:avgMarksPromiseController,
    getMarksController:getMarksController,
    maxMarksController:maxMarksController,
    minMarksController:minMarksController

}