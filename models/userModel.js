const mongoose = require("mongoose");

//blueprint fields types
const userSchema = new mongoose.Schema({
  // _id:mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  phoneNo: Number,
  password: String,
  isVerified: Boolean,
  otp: Number,
});

// Model class
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
