const express = require('express');
const mongoose = require('mongoose');
const Question = require('../models/question');
const router = express.Router();

mongoose.connect('mongodb://localhost/codeTest');

router.get('/api', (req, res, next) => {
  // make call to db here, then expose array of questions in res.send
  Question.find({}, (err, questions) => {
    if (err) next(err);
    res.send(questions);
  });
});

module.exports = router;
