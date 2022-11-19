const mongoose = require('mongoose');

const PatientSchema = require('../schema/Patient.js');
const PatientModel = mongoose.model('patient', PatientSchema);
module.exports = PatientModel;