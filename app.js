const mongoose= require('mongoose');
const express=require('express');
const registerMarksRoute= require('./routes/marksRoute');
const middleware=require('./middlewares/middleware');

const app=express();
const apiLogger=middleware.apiLogger;

//MIDDLEWARES 
app.use(express.json())   // to parse the request
app.use(apiLogger);

// DATABASE CONNECTION
const dbConnect=require('./startup/db')
dbConnect();

//APIs
registerMarksRoute(app);

//STARTING THE SERVER
 app.listen(4000 , () =>{
     console.log("successful 4000 port")
 });

