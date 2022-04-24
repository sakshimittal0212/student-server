const studentController=require('../controller/studentController')
const insertStudentController=studentController.insertStudentController;
const getStudentController=studentController.getStudentController;
const getStudentByIdController=studentController.getStudentByIdController;
const deleteStudentController=studentController.deleteStudentController;
const updateStudentController=studentController.updateStudentController;

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

function deleteStudentApi(app){
    app.delete('/api/async/student/:id',deleteStudentController)
}

function updateStudentApi(app){
    app.put('/api/async/student/:id',updateStudentController)
}

module.exports={
    insertStudentApi:insertStudentApi,
    getStudentApi:getStudentApi,
    getStudentByIdApi:getStudentByIdApi,
    deleteStudentApi:deleteStudentApi,
    updateStudentApi:updateStudentApi
};