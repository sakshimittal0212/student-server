const userDbService = require("../services/userDbService");
const helpers = require("../helpers/utils");
// const helpers = require("../helpers/helpers");

let insertUserController = async function (request, response) {
  try {
    let userExist = await userDbService.getUser({
      phoneNo: request.body.phoneNo,
    });
    console.log(userExist);
    if (userExist) {
      return response.status(400).json({ err: "user already exist" });
    }
    let otpValue = helpers.generateOtp(4);
    
    let result = await userDbService.createUser({
      name: request.body.name,
      email: request.body.email,
      phoneNo: request.body.phoneNo,
      isVerified: false,
      otp: otpValue
    });
    response.status(200).json({ newUser: result });
  } catch (error) {
    console.log(error);
    response.status(404).json({ err: error });
  }
};

let otpVerifyController = async function (req, res) {
  console.log(req.body.phoneNo);
  console.log(req.body.otp);
  try {
    let result = await userDbService.getUser({ phoneNo: req.body.phoneNo });
    console.log(result);
    if (result == null) {
      return res.status(400).json({ err: "Phone no does not exist" });
    }
    if (result.otp != req.body.otp) {
      return res.status(400).json({ err: "Invalid OTP" });
    }
    // let hashCode=helpers.compareHash(req.body.password,req.body.hash)
    // if(hashCode==false){
    //     return res.status(400).json({ err: "Invalid Password" });
    // }
    let hashCode=helpers.generateHash(req.body.password)
    

    let update = await userDbService.updateUser(
      { phoneNo: req.body.phoneNo },
      {
        $set: {
          isVerified: true,
          password : hashCode,
        },
      }
    );
    res.status(200).json({ message: "ok" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err:"server not working" });
  }
};


let loginUserController = async function (req, res) {
    console.log(req.body.phoneNo);
    console.log(req.body.password);
    try {
      let user = await userDbService.getUser({ phoneNo: req.body.phoneNo });
      console.log(user);
      if (user == null) {
        return res.status(400).json({ err: "Phone no does not exist" });
      }
      let passwordMatched=helpers.compareHash(req.body.password,user.password)
      if(passwordMatched==false){
          return res.status(400).json({ err: "Invalid Password" });
      }
      let token=helpers.generateToken({_id :user._id})   //how to id here in the parameter doubt
      res.status(200).json({ message: "ok" ,token:token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ err:"server not working" });
    }
  };

module.exports = {
  insertUserController,
  otpVerifyController,
  loginUserController
};
