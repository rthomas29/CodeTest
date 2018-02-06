import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import AnswerList from './AnswerList';

const Quiz = props => {
  return (
    <div class="container">
      <Question content={props.content} />
      <AnswerList
        answers={props.answers}
        onAnswerSelection={props.onAnswerSelection}
        selectedAnswer={props.selectedAnswer}
        correct={props.correct}
        type={props.type}
      />
    </div>
  );
};

export default Quiz;

Quiz.PropTypes = {
  content: PropTypes.string.isRequired,
};
