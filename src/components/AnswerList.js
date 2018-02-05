import React from 'react';
import PropTypes from 'prop-types';

const AnswerList = props => {
  const answerList = props.answer.map(answer => {
    return (
      <div>
        <input type="radio" id="HTML" />
        <label htmlFor="HTML">{answer}</label>
      </div>
    );
  });
  return <ul>{answerList}</ul>;
};

export default AnswerList;
