const studentController=require('../controller/studentController')
const insertStudentController=studentController.insertStudentController;
const getStudentController=studentController.getStudentController;
const getStudentByIdController=studentController.getStudentByIdController;
const deleteStudentController=studentController.deleteStudentController;
const updateStudentController=studentController.updateStudentController;

//todo 
//1.create only one attachApi function and directly export it 
//2. write all the api routes in this function donot create function for every route
//3.you can directly write controller using dot in
// APIs controller parameter eg. app.get('/xyz',studentController.xyz)
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