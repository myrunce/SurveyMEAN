var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SurveySchema = new mongoose.Schema({
    name: {type: String, required: true},
    question: {type: String, required: true, minlength: 8},
    options: [{type: Schema.Types.ObjectId, ref:'Option'}]
}, {timestamps: true});
var Survey = mongoose.model('Survey', SurveySchema);

