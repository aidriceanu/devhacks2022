require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const baucis = require('baucis');

mongoose.connect(process.env.DB_URI);

// Create a Mongoose schema
const Patient = new mongoose.Schema({
  client: String,
  action: String,
  resource: String,
  time: Date,
});
// Note that Mongoose middleware will be executed as usual
Patient.pre('save', function (next) {
  console.log('A patient was saved to Mongo: %s.', this.get('client'));
  this.set('time', new Date())
  next();
});

// Register the schema
mongoose.model('patient', Patient);

// Create dummy data
var data = [
  {
    client: 'ASD0',
    action: 'First Consult',
    resource: 'Psychologist',
    time: new Date('11/19/22'),
  },
  {
    client: 'Teacher',
    action: 'SelfAssement',
    resource: 'Teacher',
    time: new Date('11/19/22'),
  },
  {
    client: 'Psychologist',
    action: 'SelfAssement',
    resource: 'Psychologist',
    time: new Date('11/19/22'),
  }
];

const main = async () => {
  await mongoose.model('patient').deleteMany();
  await mongoose.model('patient').create(data);

  baucis.rest('patient');

  var app = express();
  app.use('/api', baucis());
  app.listen(process.env.SERVER_PORT);

  console.log(`Server listening on port ${process.env.SERVER_PORT}.`);
};

main();