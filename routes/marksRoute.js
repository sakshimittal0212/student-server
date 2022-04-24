const marksController=require('../controller/marksController')
const express=require('express');
// const middleware=require('../middlewares/middleware');


function attachApi(app){
 //attching APi controller and endpoints and http methods(get,put,post ) with express app as an arrugement 
//  that we are getting from app.js file 
 // when this function is called
 
 app.get('/api/promise/avgMarks/:studentId',marksController.avgMarksPromiseController)

 app.get('/api/async/avgMarks/:studentId',marksController.avgMarksAsyncController)
}

module.exports=attachApi;

// example of middleware of specific api
// app.get('/api/promise/avgMarks/:studentId',express.json(),marksController.avgMarksPromiseController)
// app.get('/api/async/avgMarks/:studentId',middleware,marksController.avgMarksAsyncController)