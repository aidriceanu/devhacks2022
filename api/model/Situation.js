const mongoose = require('mongoose');

const SituationSchema = require('../schema/Situation.js');
const SituationModel = mongoose.model('situation', SituationSchema);
module.exports = SituationModel;