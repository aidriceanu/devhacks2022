require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const baucis = require('baucis');

mongoose.connect(process.env.DB_URI);

const EvaluatorModel = require('./model/Evaluator.js');
const PatientModel = require('./model/Patient.js');
const EvaluationModel = require('./model/Evaluation.js');
const SituationModel = require('./model/Situation.js');
const ActivityModel = require('./model/Activity.js');

const main = async () => {
  await EvaluatorModel.deleteMany();
  await EvaluatorModel.create([
    "Teacher",
    "Parent",
    "Shadow",
    "Nanny",
    "Relative",
  ].map(e => ({ name: e })));

  await PatientModel.deleteMany();
  await PatientModel.create([
    "Patient 1",
    "Patient 2",
    "Patient 3",
    "Patient 4",
    "Patient 5"
  ].map(e => ({ name: e })));

  await EvaluationModel.deleteMany();
  await EvaluationModel.create([
    {
      patient: 'Patient 1',
      evaluator: 'Psychologist',
      generalMood: 4,
      time: new Date('11/10/22'),
    },
    {
      patient: 'Patient 1',
      evaluator: 'Teacher',
      generalMood: 4,
      time: new Date('11/10/22'),
    },
    {
      patient: 'Patient 2',
      evaluator: 'Teacher',
      generalMood: 2,
      time: new Date('11/11/22'),
    },
    {
      patient: 'Patient 2',
      evaluator: 'Psychologist',
      generalMood: 5,
      time: new Date('11/14/22'),
    }
  ]);

  await SituationModel.deleteMany();
  await SituationModel.create([
    {
      patient: 'Patient 1',
      evaluator: 'Psychologist',
      type: 'bad',
      label: 'Some situation 1',
      time: new Date('11/10/22'),
    },
    {
      patient: 'Patient 1',
      evaluator: 'Teacher',
      type: 'bad',
      label: 'Some situation 2',
      time: new Date('11/10/22'),
    },
    {
      patient: 'Patient 2',
      evaluator: 'Teacher',
      type: 'good',
      label: 'Some situation 1',
      time: new Date('11/11/22'),
    },
    {
      patient: 'Patient 3',
      evaluator: 'Psychologist',
      type: 'good',
      label: 'Some situation 3',
      time: new Date('11/14/22'),
    }
  ]);

  await ActivityModel.deleteMany();
  await ActivityModel.create([
    {
      patient: 'Patient 1',
      evaluator: 'Psychologist',
      grade: 5,
      label: 'Washed his hands',
      time: new Date('11/10/22'),
    },
    {
      patient: 'Patient 1',
      evaluator: 'Teacher',
      grade: 4,
      label: 'Ate today',
      time: new Date('11/10/22'),
    },
    {
      patient: 'Patient 2',
      evaluator: 'Teacher',
      grade: 3,
      label: 'Played with sister',
      time: new Date('11/11/22'),
    },
    {
      patient: 'Patient 3',
      evaluator: 'Psychologist',
      grade: 5,
      label: 'Walk in the park',
      time: new Date('11/14/22'),
    }
  ]);

  baucis.rest('evaluator');
  baucis.rest('patient');
  baucis.rest('evaluation');
  baucis.rest('situation');
  baucis.rest('activity');

  var app = express();
  app.use('/api', baucis());
  app.listen(process.env.SERVER_PORT);

  console.log(`Server listening on port ${process.env.SERVER_PORT}.`);
};

main();