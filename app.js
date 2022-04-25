const mongoose= require('mongoose');
const express=require('express');

const registerMarksRoute= require('./routes/marksRoute');
const middleware=require('./middlewares/middleware');

//todo make this registerStudentRoute and registerStudentRoute
const registerStudentRoute=require('./routes/studentRoute')
const registerSubjectRoute=require('./routes/subjectRoute')
const app=express();
const apiLogger=middleware.apiLogger;

app.use(express.json())   // to parse the request
app.use(apiLogger);

// DATABASE CONNECTION
const dbConnect=require('./startup/db')
dbConnect();

//APIs
registerMarksRoute(app);
registerStudentRoute(app);
registerSubjectRoute(app);

//STARTING THE SERVER
 app.listen(4000 , () =>{
     console.log("successful 4000 port")
 });

