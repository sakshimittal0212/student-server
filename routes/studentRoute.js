const studentController=require('../controller/studentController')
const insertStudentController=studentController.insertStudentController;
const getStudentController=studentController.getStudentController;
const getStudentByIdController=studentController.getStudentByIdController;

function insertStudentApi(app)
{
    app.post('/api/async/student',insertStudentController)
}

function getStudentApi(app){
    app.get('/api/async/student',getStudentController)
}

function getStudentByIdApi(app){
    app.get('/api/async/student/:id',getStudentByIdController)
}

module.exports={
    insertStudentApi:insertStudentApi,
    getStudentApi:getStudentApi,
    getStudentByIdApi:getStudentByIdApi
}
;