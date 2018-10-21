import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import '../../styles/AnswerList.css';

AnswerList.propTypes = {
  type: PropTypes.string.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
  onAnswerSelection: PropTypes.func.isRequired,
  checkCorrect: PropTypes.func.isRequired
};

export default function AnswerList({ answers, type, selectedAnswer, onAnswerSelection, checkCorrect }) {
  const answer = answers.map(answer => {
    return (
      <li key={answer}>
        <input type="radio" value={type} checked={selectedAnswer === answer} onChange={onAnswerSelection} />
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
        <Button color="primary" onClick={checkCorrect} disabled={!selectedAnswer}>
          Submit
        </Button>
      </div>
    </div>
  );
}
