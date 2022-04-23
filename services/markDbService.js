const { append } = require('express/lib/response')
const marksModel=require('../models/marksModel')

function getMarks(filter){
   return  marksModel.find(filter) 
}



function updateMarks(filter,dataToUpdate){
    return  marksModel.updateOne(filter,dataToUpdate) 
 }

module.exports={
    getMarks:getMarks,
    updateMarks:updateMarks
};