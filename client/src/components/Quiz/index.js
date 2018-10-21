import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './components/Question';
import AnswerList from './components/AnswerList';
import './styles/index.css';
export default class Quiz extends Component {
  static PropTypes = {
    questionCount: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    onAnswerSelection: PropTypes.func.isRequired,
    selectedAnswer: PropTypes.string.isRequired,
    correct: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    checkCorrect: PropTypes.func.isRequired
  };
  render() {
    const {
      questionCount,
      content,
      answers,
      onAnswerSelection,
      selectedAnswer,
      correct,
      type,
      checkCorrect
    } = this.props;
    return (
      <div id="quiz" className="container w-50" key={questionCount}>
        <Question content={content} questionCount={questionCount} />
        <AnswerList
          answers={answers}
          onAnswerSelection={onAnswerSelection}
          selectedAnswer={selectedAnswer}
          correct={correct}
          type={type}
          checkCorrect={checkCorrect}
        />
      </div>
    );
  }
}
