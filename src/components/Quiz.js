import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import AnswerList from './AnswerList';
import '../stylesheets/Quiz.css';
class Quiz extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="quiz" className="container" key={this.props.questionCount}>
        <Question content={this.props.content} questionCount={this.props.questionCount} />
        <AnswerList
          answers={this.props.answers}
          onAnswerSelection={this.props.onAnswerSelection}
          selectedAnswer={this.props.selectedAnswer}
          correct={this.props.correct}
          type={this.props.type}
        />
      </div>
    );
  }
}

export default Quiz;

Quiz.PropTypes = {
  content: PropTypes.string.isRequired,
};
