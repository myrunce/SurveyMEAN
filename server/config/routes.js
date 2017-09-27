var controller = require('../controllers/controller.js');
const path = require('path'); 
module.exports = function(app) {
    app.post('/api/surveys', controller.addSurvey);
    app.get('/api/surveys', controller.getAll);
    app.get('/api/surveys/:id', controller.findOne);
    app.delete('/api/surveys/:id', controller.deleteSurvey);
    app.put('/api/surveys/:id', controller.addOption);
    app.put('/api/options/:id', controller.updateOption);
    app.get('/api/options/:id', controller.findOption);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}