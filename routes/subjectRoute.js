const getSubjectController=require('../controller/subjectController');

function getSubjectApi(app){
    app.get('/api/async/subject',getSubjectController);
}

module.exports=getSubjectApi;