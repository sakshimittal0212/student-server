let generateOtp=function(num){
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < num; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;}
module.exports={
    generateOtp:generateOtp
}
//todo  complete generate otp function which will generate random otp of num length
//      