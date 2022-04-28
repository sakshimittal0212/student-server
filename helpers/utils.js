const nodemailer = require("nodemailer");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const constants = require("./constant");

let { saltRounds, secretKey } = constants;

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASSWORD_EMAIL,
  },
});

let generateOtp = function (num) {
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < num; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

let generateToken = function (data) {
  console.log(data);
  var token = jwt.sign(data, secretKey);
  return token;
};

let decodeToken = function (token) {
  var decode = jwt.decode(token);
  var decoded = jwt.verify(token, secretKey);
  // console.log(decode)
  return decoded;
};
let generateHash = function (password) {
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
};

let compareHash = function (password, hash) {
  const compare = bcrypt.compareSync(password, hash);
  return compare;
};

let mailFunction = function (senderMail, otp) {
  let mailOptions = {
    from: process.env.USER_EMAIL,
    to: senderMail,
    subject: "Your OTp:",
    text: `Otp is :` + otp,
  };
//   console.log(senderMail, otp);

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent :" + info.response);
    }
  });
};

module.exports = {
  generateOtp: generateOtp,
  generateToken: generateToken,
  decodeToken: decodeToken,
  generateHash,
  compareHash,
  mailFunction,
};
//todo  complete generate otp function which will generate random otp of num length
//
