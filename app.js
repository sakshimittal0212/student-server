const mongoose= require('mongoose');
const express=require('express');
const registerMarksRoute= require('./routes/marksRoute');
const studentRoute=require('./routes/studentRoute')
const getStudentApi=studentRoute.getStudentApi;
const insertStudentApi=studentRoute.insertStudentApi;
const getStudentById=studentRoute.getStudentByIdApi;
const deleteStudentApi=studentRoute.deleteStudentApi;
const updateStudentApi=studentRoute.updateStudentApi;
const subjectRoute=require('./routes/subjectRoute')

const app=express();

//MIDDLEWARES 
app.use(express.json())   // to parse the request

// DATABASE CONNECTION
const dbConnect=require('./startup/db')
dbConnect();

//APIs
registerMarksRoute.attachApi(app);
registerMarksRoute.getMarksApi(app);
registerMarksRoute.maxMarksApi(app);
registerMarksRoute.minMarksApi(app);
insertStudentApi(app);
getStudentApi(app);
getStudentById(app);
deleteStudentApi(app);
updateStudentApi(app);
subjectRoute(app);

//STARTING THE SERVER
 app.listen(4000 , () =>{
     console.log("successful 4000 port")
 });

