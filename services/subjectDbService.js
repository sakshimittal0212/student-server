const subjectModel=require('../models/subjectModel');

function getSubject(){
    return subjectModel.find();
}

module.exports=getSubject;