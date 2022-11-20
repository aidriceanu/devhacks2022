const mongoose = require('mongoose');

const SituationSchema = new mongoose.Schema({
  evaluator: String,
  patient: String,
  type: String,
  label: String,
  time: Date,
});
SituationSchema.pre('save', function (next) {
  console.log('A situation was saved to the DB: %s.', this.get('_id'));
  this.set('time', new Date())
  next();
});
module.exports = SituationSchema;
