import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Question.css';

Question.PropTypes = {
  questionCount: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

const Question = props => {
  return (
    <div>
      <p className="lead">
        {props.questionCount}. {props.content}
      </p>
    </div>
  );
};

export default Question;
