import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/AnswerList.css';

const AnswerList = props => {
  const answer = props.answers.map(answer => {
    return (
      <li>
        <input
          type="radio"
          onChange={props.onAnswerSelection}
          value={props.type}
          checked={props.selectedAnswer === answer}
        />
        <span className="font-weight-light">{answer}</span>
      </li>
    );
  });
  return (
    <div id="answer-list">
      <ul className="answerOption">{answer}</ul>
    </div>
  );
};

export default AnswerList;
