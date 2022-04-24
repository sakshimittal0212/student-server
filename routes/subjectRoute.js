const getSubjectController=require('../controller/subjectController');

function attachSubjectApi(app){
    app.get('/api/async/subject',getSubjectController);
}

module.exports=attachSubjectApi;