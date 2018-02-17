const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: String,
  type: String,
  answers: [String],
  correct: String,
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
