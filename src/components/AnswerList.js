import React from 'react';
import PropTypes from 'prop-types';

const AnswerList = props => {
  const answer = props.answers.map(answer => {
    return (
      <li>
        <input
          type="radio"
          onChange={props.onAnswerSelection}
          value={answer}
          checked={props.selectedAnswer === answer}
        />
        {answer}
      </li>
    );
  });
  return (
    <form action="">
      <ul className="answerOption">{answer}</ul>
    </form>
  );
};

export default AnswerList;
