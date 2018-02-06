import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
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
        <span>{answer}</span>
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
