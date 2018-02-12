import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import '../stylesheets/AnswerList.css';

AnswerList.PropTypes = {
  type: PropTypes.string.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
  onAnswerSelection: PropTypes.func.isRequired,
  checkCorrect: PropTypes.func.isRequired,
};

const AnswerList = props => {
  const answer = props.answers.map(answer => {
    return (
      <li>
        <input
          type="radio"
          value={props.type}
          checked={props.selectedAnswer === answer}
          onChange={props.onAnswerSelection}
        />
        <span className="font-weight-light">{answer}</span>
      </li>
    );
  });
  return (
    <div id="answer-list" className="d-flex flex-column justify-content-center">
      <div className="answer-list align-self-">
        <ul className="answerOption">{answer}</ul>
      </div>
      <div className="btn align-self-center">
        <Button color="primary" onClick={props.checkCorrect} disabled={!props.selectedAnswer}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AnswerList;
