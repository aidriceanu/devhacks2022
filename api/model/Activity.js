const mongoose = require('mongoose');

const ActivitySchema = require('../schema/Activity.js');
const ActivityModel = mongoose.model('activity', ActivitySchema);
module.exports = ActivityModel;