const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: String
});
PatientSchema.pre('save', function (next) {
  console.log('A patient was saved to the DB: %s.', this.get('_id'));
  next();
});
module.exports = PatientSchema;