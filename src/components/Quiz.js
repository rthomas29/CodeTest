import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import AnswerList from './AnswerList';
import '../stylesheets/Quiz.css';
class Quiz extends Component {
  render() {
    return (
      <div id="quiz" className="container w-50" key={this.props.questionCount}>
        <Question content={this.props.content} questionCount={this.props.questionCount} />
        <AnswerList
          answers={this.props.answers}
          onAnswerSelection={this.props.onAnswerSelection}
          selectedAnswer={this.props.selectedAnswer}
          correct={this.props.correct}
          type={this.props.type}
          checkCorrect={this.props.checkCorrect}
        />
      </div>
    );
  }
}

export default Quiz;

Quiz.PropTypes = {
  questionCount: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  onAnswerSelection: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
  correct: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  checkCorrect: PropTypes.func.isRequired,
};
