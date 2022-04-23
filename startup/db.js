const mongoose= require('mongoose');

function dbStart(){
    mongoose.connect('mongodb://localhost:27017/schoolDatabase'); 
}

module.exports=dbStart;

