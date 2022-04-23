const marksController=require('../controller/marksController')

function attachApi(app){
 //attching APi controller and endpoints and http methods(get,put,post ) with express app as an arrugement 
//  that we are getting from app.js file 
 // when this function is called
 
 app.get('/api/promise/avgMarks/:studentId',avgMarksPromiseController)

 app.get('/api/async/avgMarks/:studentId',avgMarksAsyncController)
}

module.exports=attachApi;


