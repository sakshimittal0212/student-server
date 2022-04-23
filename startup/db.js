const mongoose= require('mongoose');

const dbUrl  = 'mongodb://localhost:27017/schoolDatabase'

function dbStart(){
    mongoose.connect(dbUrl); 
}

module.exports=dbStart;

