var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OptionSchema = new mongoose.Schema({
    theOption: {type: String, required: true, minlength: 3},
    votes: {type: Number, required: false},
    _survey: [{type: Schema.Types.ObjectId, ref:'Survey'}]
}, {timestamps: true});
var Option = mongoose.model('Option', OptionSchema);

