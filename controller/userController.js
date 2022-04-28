const userDbService = require("../services/userDbService");
const helpers = require("../helpers/utils");
const req = require("express/lib/request");

let insertUserController = async function (request, response) {
  try {
    let userExist = await userDbService.getUser({
      phoneNo: request.body.phoneNo,
    });
    console.log(userExist);
    if (userExist) {
      return response.status(400).json({ err: "user already exist" });
    }
    //This is used to generate otp
    let otpValue = helpers.generateOtp(4);

    // This is used to send an mail
    helpers.mailFunction(request.body.email, otpValue);

    let result = await userDbService.createUser({
      name: request.body.name,
      email: request.body.email,
      phoneNo: request.body.phoneNo,
      isVerified: false,
      otp: otpValue,
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

    let hashCode = helpers.generateHash(req.body.password);

    let update = await userDbService.updateUser(
      { phoneNo: req.body.phoneNo },
      {
        $set: {
          isVerified: true,
          password: hashCode,
        },
      }
    );
    res.status(200).json({ message: "ok" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "server not working" });
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
    let passwordMatched = helpers.compareHash(req.body.password, user.password);
    if (passwordMatched == false) {
      return res.status(400).json({ err: "Invalid Password" });
    }
    let token = helpers.generateToken({ _id: user._id }); //how to id here in the parameter doubt
    res.status(200).json({ message: "ok", token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "server not working" });
  }
};

let forgetPasswordController = async function (req, res) {
  console.log(req.body.phoneNo);
  console.log(req.body.otp);
  try {
    let result = await userDbService.getUser({ phoneNo: req.body.phoneNo });
    console.log(result);
    if (result == null) {
      return res.status(400).json({ err: "Phone no does not exist" });
    }
    let otpValue = helpers.generateOtp(4);
    console.log(otpValue);

    let update = await userDbService.updateUser(
      { phoneNo: req.body.phoneNo },
      {
        $set: {
          otp: otpValue,
        },
      }
    );
    res.status(200).json({ message: "Otp send", otp: otpValue });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "server not working" });
  }
};

let otpForgetPasswordVerifyController = async function (req, res) {
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

    let newHashPassword = helpers.generateHash(req.body.password);

    let update = await userDbService.updateUser(
      { phoneNo: req.body.phoneNo },
      {
        $set: {
          isVerified: true,
          password: newHashPassword,
        },
      }
    );
    res.status(200).json({ message: "password updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "server not working" });
  }
};

module.exports = {
  insertUserController,
  otpVerifyController,
  loginUserController,
  forgetPasswordController,
  otpForgetPasswordVerifyController,
};
