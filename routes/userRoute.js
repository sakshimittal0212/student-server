const userController=require('../controller/userController')

function attachUserApi(app){
    app.post('/api/async/user',userController.insertUserController)
    app.post('/api/async/otp',userController.otpVerifyController)
    app.post('/api/async/login',userController.loginUserController)

}

module.exports=attachUserApi