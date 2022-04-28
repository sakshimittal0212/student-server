const mongoose= require('mongoose');
const dbHost=process.env.DB_HOST;
const dbPort=process.env.DB_PORT;
const dbName=process.env.DB_NAME;
const dbUrl  = 'mongodb://'+ dbHost +  ":"  +dbPort+ "/" +dbName ;

function dbStart(){
    mongoose.connect(dbUrl,function(){
        console.log("db connected");
    }); 
}

module.exports=dbStart;

