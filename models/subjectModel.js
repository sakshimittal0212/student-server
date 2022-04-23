const mongoose= require('mongoose');

const subjectSchema= new mongoose.Schema({
    subject_id:mongoose.Types.ObjectId,
     subject_name: String
   })
   
   const subjectModel=mongoose.model('subjectDb',subjectSchema);
   module.exports=subjectModel;