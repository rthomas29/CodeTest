import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Question.css';

Question.PropTypes = {
  questionCount: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
};

export default function Question({ questionCount, content }) {
  return (
    <div>
      <p className="lead">
        {questionCount}. {content}
      </p>
    </div>
  );
}
