import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import AnswerList from './AnswerList';

const Quiz = props => {
  return (
    <div>
      <Question content={props.content} />
      <AnswerList answer={props.answers} />
      <button onClick={props.handleQuestionChange}>Click</button>
    </div>
  );
};

export default Quiz;

Quiz.PropTypes = {
  content: PropTypes.string.isRequired,
};
