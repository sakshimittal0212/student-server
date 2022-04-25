var jwt = require('jsonwebtoken');
let secretKey='shhhhh'

let generateOtp=function(num){
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < num; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

let generateToken=function(data){
    console.log(data);
var token = jwt.sign(data,secretKey);
return token

}
let decodeToken=function(token){
    var decode=jwt.decode(token)
    var decoded = jwt.verify(token, secretKey);
console.log(decode)
return decoded
}

module.exports={
    generateOtp:generateOtp,
    generateToken:generateToken,
    decodeToken:decodeToken

}
//todo  complete generate otp function which will generate random otp of num length
//      