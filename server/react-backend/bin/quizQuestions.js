const mongoose = require('mongoose');
const Question = require('../models/question');

mongoose.connect('mongodb://localhost/codeTest');

const quizQuestions = [
  {
    question: 'What does OOP stand for?',
    type: 'JavaScript',
    answers: ['Object Oriented Process', 'Only One Pineapple', 'Object Oriented Programming', 'Oops Only Papaya'],
    correct: 'Object Oriented Programming',
  },
  {
    question: 'Which HTML tag is a block level element?',
    type: 'HTML',
    answers: ['a', 'i', 'div', 'em'],
    correct: 'div',
  },
  {
    question: 'What CSS rule is used to hide elements within a webpage?',
    type: 'CSS',
    answers: ['display', 'hide', 'block', 'no-show'],
    correct: 'display',
  },
  {
    question: 'What does HTML stand for?',
    type: 'HTML',
    answers: [
      'HyperText Marking Language',
      'HyperText Machine Learning',
      'HyperText Markup Language',
      'HyperTeeth Make Lunch',
    ],
    correct: 'HyperText Markup Language',
  },
  {
    question: 'Which CSS rule allows you to push elements away from the selected element?',
    type: 'CSS',
    answers: ['padding', 'margin', 'float', 'position'],
    correct: 'margin',
  },
  {
    question: 'Which answer correctly displays the declaration and initialization of an array literal?',
    type: 'JavaScript',
    answers: ['var arr = {};', 'var arr;', 'var arr = [];', 'var arr = {a};'],
    correct: 'var arr = [];',
  },
  {
    question: 'What is the function of the modulo (%) operator?',
    type: 'JavaScript',
    answers: [
      'Evenly divides two numbers',
      'Returns the remainder of two divided numbers',
      'Returns the percentage of the sum of both numbers',
      'Rounds division to nearest whole integer',
    ],
    correct: 'Returns the remainder of two divided numbers',
  },
  {
    question:
      'What HTML element is responsible for holding metadata for your webpage and is not rendered to the screen?',
    type: 'HTML',
    answers: ['title', 'head', 'body', 'span'],
    correct: 'head',
  },
  {
    question: 'Where should the CSS file be referenced in the HTML?',
    type: 'CSS',
    answers: [
      'Inside the head tag',
      'Within a script tag',
      'Immediately before the closing body tag',
      'Using the import statement in your CSS',
    ],
    correct: 'Immediately before the closing body tag',
  },
  {
    question: 'What is the difference between a parameter and an argument in a function?',
    type: 'JavaScript',
    answers: [
      'There is no difference',
      'Parameters are values passed at call time, and arguments are included at declaration time',
      'Arguments are values passed at call time, and parameters are included at declaration time',
      'Parameters define the behavior of the function, while arguments do not',
    ],
    correct: 'Arguments are values passed at call time, and parameters are included at declaration time',
  },
];

Question.create(quizQuestions, (err, docs) => {
  if (err) throw err;
  docs.forEach(doc => {
    console.log(doc.type);
  });
  mongoose.connection.close();
});
