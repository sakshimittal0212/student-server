const mongoose= require('mongoose');
const express=require('express');
const registerMarksRoute= require('./routes/marksRoute');

const app=express();

//MIDDLEWARES
app.use(express.json())

// DATABASE CONNECTION
const dbConnect=require('./startup/db')
dbConnect();

//APIs
registerMarksRoute(app);

//STARTING THE SERVER
 app.listen(4000 , () =>{
     console.log("successful 4000 port")
 });

