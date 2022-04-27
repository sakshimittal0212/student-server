var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const constants=require('./constant')

let {saltRounds,secretKey} = constants;

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
// console.log(decode)
return decoded
}
let generateHash=function(password){
    const hash = bcrypt.hashSync(password,saltRounds);
    return hash
}

let compareHash=function(password,hash){
    const compare=bcrypt.compareSync(password, hash);
    return compare
}

module.exports={
    generateOtp:generateOtp,
    generateToken:generateToken,
    decodeToken:decodeToken,
    generateHash,
    compareHash

}
//todo  complete generate otp function which will generate random otp of num length
//      