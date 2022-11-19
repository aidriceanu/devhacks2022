const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  evaluator: String,
  patient: String,
  grade: Number,
  label: String,
  time: Date,
});
ActivitySchema.pre('save', function (next) {
  console.log('An activity was saved to the DB: %s.', this.get('_id'));
  this.set('time', new Date())
  next();
});
module.exports = ActivitySchema;
