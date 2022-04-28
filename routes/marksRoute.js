const marksController=require('../controller/marksController')
const express=require('express');
// const middleware=require('../middlewares/middleware');    // if we want to add specific middleware


function attachApi(app){
 //attching APi controller and endpoints and http methods(get,put,post ) with express app as an arrugement 
//  that we are getting from app.js file 
 // when this function is called
 app.post('/api/async/mark',marksController.insertMarkController)
 
 app.get('/api/promise/avgMarks/:studentId',marksController.avgMarksPromiseController)

 app.get('/api/async/avgMarks/:studentId',marksController.avgMarksAsyncController)
 
 app.get('/api/async/mark',marksController.getMarksController)

 app.get('/api/async/maxMarks/:subjectId',marksController.maxMarksController)

 app.get('/api/async/minMarks/:subjectId',marksController.minMarksController)
}


module.exports= attachApi;

// example of middleware of specific api
// app.get('/api/promise/avgMarks/:studentId',express.json(),marksController.avgMarksPromiseController)
// app.get('/api/async/avgMarks/:studentId',middleware,marksController.avgMarksAsyncController)
