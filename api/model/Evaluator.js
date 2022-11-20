const mongoose = require('mongoose');

const EvaluatorSchema = require('../schema/Evaluator.js');
const EvaluatorModel = mongoose.model('evaluator', EvaluatorSchema);
module.exports = EvaluatorModel;