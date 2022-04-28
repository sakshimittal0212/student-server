const mongoose= require('mongoose');
const express=require('express');
const env=require('dotenv');
env.config();
console.log(process.env.PWD)
console.log(process.env.SERVER_PORT)

const registerMarksRoute= require('./routes/marksRoute');
const middleware=require('./middlewares/middleware');

//todo make this registerStudentRoute and registerStudentRoute
const registerStudentRoute=require('./routes/studentRoute')
const registerSubjectRoute=require('./routes/subjectRoute')
const registerUserRoute=require('./routes/userRoute')
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
registerUserRoute(app);

//STARTING THE SERVER
 app.listen(process.env.SERVER_PORT , () =>{
     console.log("server is running successfully")
 });

