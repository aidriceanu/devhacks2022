const mongoose = require('mongoose');

const EvaluationSchema = require('../schema/Evaluation.js');
const EvaluationModel = mongoose.model('evaluation', EvaluationSchema);
module.exports = EvaluationModel;