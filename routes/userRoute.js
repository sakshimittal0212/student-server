const userController=require('../controller/userController')

function attachUserApi(app){
    app.post('/api/async/user',userController.insertUserController)
    app.post('/api/async/otp',userController.otpVerifyController)
    app.post('/api/async/login',userController.loginUserController)
    app.post('/api/async/forgetPassword',userController.forgetPasswordController)
    app.post('/api/async/otpForgetPassword',userController.otpForgetPasswordVerifyController)
}

module.exports=attachUserApi