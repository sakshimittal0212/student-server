const mongoose= require('mongoose');
const express=require('express');
const registerMarksRoute= require('./routes/marksRoute');
const studentRoute=require('./routes/studentRoute')
const getStudentApi=studentRoute.getStudentApi;
const insertStudentApi=studentRoute.insertStudentApi;
const getStudentById=studentRoute.getStudentByIdApi

const app=express();

//MIDDLEWARES 
app.use(express.json())   // to parse the request

// DATABASE CONNECTION
const dbConnect=require('./startup/db')
dbConnect();

//APIs
registerMarksRoute(app);
insertStudentApi(app);
getStudentApi(app);
getStudentById(app);

//STARTING THE SERVER
 app.listen(4000 , () =>{
     console.log("successful 4000 port")
 });

