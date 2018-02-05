import React from 'react';
import PropTypes from 'prop-types';

const AnswerList = props => {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.type === props.answer}
        id={props.type}
        value={props.type}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.type}>
        {props.answerContent}
      </label>
    </li>
  );
};

export default AnswerList;
