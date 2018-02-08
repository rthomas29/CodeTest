import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Question.css';

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

Question.PropTypes = {
  content: PropTypes.string.isRequired,
};
