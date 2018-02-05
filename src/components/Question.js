import React from 'react';
import PropTypes from 'prop-types';

const Question = (props) => {
  return (
    <div>
      <h3>{props.content}</h3>
    </div>
  )
}

export default Question;

Question.PropTypes = {
  content: PropTypes.string.isRequired,
}