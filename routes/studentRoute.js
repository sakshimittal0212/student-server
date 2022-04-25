const studentController=require('../controller/studentController')
//todo 
//1.create only one attachApi function and directly export it 
//2. write all the api routes in this function donot create function for every route
//3.you can directly write controller using dot in
// APIs controller parameter eg. app.get('/xyz',studentController.xyz)
function attachStudentApi(app)
{
    app.post('/api/async/student',studentController.insertStudentController)
    app.get('/api/async/student',studentController.getStudentController)
    app.get('/api/async/student/:id',studentController.getStudentByIdController)
    app.delete('/api/async/student/:id',studentController.deleteStudentController)
    app.put('/api/async/student/:id',studentController.updateStudentController)
    app.post('/api/student/signUp',studentController.signUpController)
    app.post('/api/student/generateToken',studentController.generateTokenController)
    app.post('/api/student/decodeToken',studentController.decodeTokenController)
    app.post('/api/student/hashPassword',studentController.generateHashController)
    app.post('/api/student/compareHashPassword',studentController.compareHashController)
    
}


module.exports=attachStudentApi