const subjectController=require('../controller/subjectController');

function attachSubjectApi(app){
    app.get('/api/async/subject',subjectController.getSubjectController);
}

module.exports=attachSubjectApi;