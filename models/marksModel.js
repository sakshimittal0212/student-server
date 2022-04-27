const mongoose= require('mongoose');

const marksSchema= new mongoose.Schema({
    // _id: mongoose.Types.ObjectId,
    subject_id:String,
    student_id:String ,
    marks_obtained:Number,
    total_marks:Number
    
  })
  
  const marksModel=mongoose.model('marksDb',marksSchema);

module.exports=marksModel;