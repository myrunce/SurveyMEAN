var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');
var Option = mongoose.model('Option');

module.exports = {
    getAll: function(req, res) {
        Survey.find({}).exec(function(err, surveys) {
            return res.json(surveys);
        })
    },
    addSurvey: function(req, res) {
        var survey = new Survey({
            name: req.body.name,
            question: req.body.question,
        })
        survey.save(function(err) {
            if (err) {
                console.log(err);
            }
            else {
                return res.json(survey)
            }
        })
    },
    addOption: function(req, res) {
        Survey.findOne({_id:req.params.id}, function(err, survey) {
            console.log(survey);
            var option = new Option({
                theOption: req.body.theOption,
                votes: req.body.votes,
                _survey: survey._id
            })
            option.save(function(err) {
                survey.options.push(option);
                survey.save(function(err) {
                    if(err) {
                        console.log('ERROR SAVING OPTION TO SURVEY');
                    }
                    else {
                        console.log('SAVING OPTION')
                        return res.json(survey);
                    }
                })
            })
        })
    },
    findOne: function(req, res) {
        Survey.findOne({_id: req.params.id})
        .populate('options')
        .exec(function(err, survey) {
            if (err) {
                console.log('ERROR FINDING SURVEY');
            }
            else {
                return res.json(survey);
            }
        })
    },
    updateOption: (function(req, res) {
        Option.update({_id: req.params.id}, {votes: req.body.votes}, function(err, values) {
            if (!err) {
                Option.findOne({_id: req.params.id}).exec(function(err, option) {
                    return res.json(option);
                })
            } else {
                console.log('DID NOT UPDATE OPTION');
            }
        });
    }),
    findOption: function(req,res) {
        Option.find({_id: req.params.id}, function(err, option) {
            if (err) {
                console.log('COULD NOT FIND OPTION');
            }
            else {
                console.log('FOUND ANSWER')
                return res.json(option)
            }
        })
    },
    deleteSurvey: function(req, res){
        Survey.remove({_id: req.params.id}, function(err) {
            if (err) {
                console.log(err);
            }
            else {
                Survey.find({}).exec(function(err, surveys) {
                    return res.json(surveys);
                })
            }
        })
    }
}