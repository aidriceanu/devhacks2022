const mongoose = require('mongoose');

const EvaluatorSchema = new mongoose.Schema({
  name: String
});
EvaluatorSchema.pre('save', function (next) {
  console.log('An evaluator was saved to the DB: %s.', this.get('_id'));
  next();
});

module.exports = EvaluatorSchema;