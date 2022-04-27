const { append } = require('express/lib/response')
const marksModel=require('../models/marksModel')

 function insertMarks(dataObj){
    const marks=new marksModel(dataObj)
    return  marks.save()
    
}
function getMarks(filter){
    console.log('We r going to call model class');
   return  marksModel.find(filter) 
}

function updateMarks(filter,dataToUpdate){
    return  marksModel.updateOne(filter,dataToUpdate) 
 }

function maxMarks(filter){
    return marksModel.find(filter)
}

function minMarks(filter){
    return marksModel.find(filter)
}

module.exports={
    getMarks:getMarks,
    updateMarks:updateMarks,
    maxMarks:maxMarks,
    minMarks:minMarks,
    insertMarks
};