const getSubject=require('../services/subjectDbService');

let getSubjectController=async function(req,res){
    try {
      let result=await getSubject()
      res.status(200).json({subjectData:result })
      
    } catch (error) {
      res.status(500).json({err:"server error"})
    }
  }

module.exports=getSubjectController;