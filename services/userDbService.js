const userModel = require("../models/userModel");

function createUser(dataObj) {
  const user = new userModel(dataObj);
  return user.save();
}

function getUser(filter) {
  return userModel.findOne(filter);
}

function updateUser(filter, set) {
  return userModel.findOneAndUpdate(filter, set);
}

module.exports = {
  createUser,
  getUser,
  updateUser,
};
