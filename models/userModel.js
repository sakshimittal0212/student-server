const mongoose= require('mongoose');

//blueprint fields types
const userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    phoneNo: Number
    // pswd: String
  });

// Model class
  const userModel = mongoose.model('users', userSchema); 

module.exports=userModel;
