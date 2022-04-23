const marksService=require('../services/markDbService')
const getMarksService=marksService.getMarks;
//---------------------------------------------------------------------------------------------------------------------
let  avgMarksAsyncController = async function(req,res){
    console.log(req.params.studentId)
    try {
        console.log('We r going to call service');
        let result = await getMarksService({ student_id: req.params.studentId })
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
   let marksPromise= getMarksService({
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


module.exports={
    avgMarksAsyncController:avgMarksAsyncController,
    avgMarksPromiseController:avgMarksPromiseController
}