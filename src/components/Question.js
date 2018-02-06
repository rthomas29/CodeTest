import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Question.css';

const Question = props => {
  return (
    <div>
      <header>
        <h4>Question {props.questionCount}</h4>
      </header>
      <h3>{props.content}</h3>
    </div>
  );
};

export default Question;

Question.PropTypes = {
  content: PropTypes.string.isRequired,
};
