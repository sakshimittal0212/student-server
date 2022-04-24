const marksController=require('../controller/marksController');
const maxMarksController=marksController.maxMarksController;
const getMarksController=marksController.getMarksController;
const minMarksController=marksController.minMarksController;

function attachApi(app){
 //attching APi controller and endpoints and http methods(get,put,post ) with express app as an arrugement 
//  that we are getting from app.js file 
 // when this function is called
 
 app.get('/api/promise/avgMarks/:studentId',marksController.avgMarksPromiseController)

 app.get('/api/async/avgMarks/:studentId',marksController.avgMarksAsyncController)
}

function getMarksApi(app){
    app.get('/api/async/mark',getMarksController)
}

function maxMarksApi(app){
    app.get('/api/async/maxMarks/:subjectId',maxMarksController)
}

function minMarksApi(app){
    app.get('/api/async/minMarks/:subjectId',minMarksController)
}

module.exports={
    attachApi:attachApi,
    getMarksApi:getMarksApi,
    maxMarksApi:maxMarksApi,
    minMarksApi:minMarksApi
};


