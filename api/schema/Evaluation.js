const mongoose = require('mongoose');

const EvaluationSchema = new mongoose.Schema({
  evaluator: String,
  patient: String,
  generalMood: Number,
  time: Date,
});
EvaluationSchema.pre('save', async function (next) {
  console.log('An evaluation was saved to the DB: %s.', this.get('_id'));
  this.set('time', new Date());
  next();
});
module.exports = EvaluationSchema;
