import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
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
    <div id="answer-list" className="d-flex flex-row justify-content-center">
      <div className="answer-list align-self-">
        <ul className="answerOption">{answer}</ul>
      </div>
      <div className="btn align-self-center">
        <Button color="primary">Submit</Button>
      </div>
    </div>
  );
};

export default AnswerList;
