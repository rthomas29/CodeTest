import React from 'react';
import PropTypes from 'prop-types';

const AnswerList = props => {
  const answerList = props.answer.map(answer => {
    return (
      <div>
        <input
          type="radio"
          id="HTML"
          value={answer}
          checked={props.selected === props.correctAnswer}
          onChange={props.onAnswerSelection}
        />
        <label htmlFor="HTML">{answer}</label>
      </div>
    );
  });
  return <ul>{answerList}</ul>;
};

export default AnswerList;
