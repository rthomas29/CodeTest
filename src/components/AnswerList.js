import React from 'react';
import PropTypes from 'prop-types';

const AnswerList = props => {
  const answer = props.answers.map(answer => {
    return (
      <li>
        <input type="radio" />
        {answer}
      </li>
    );
  });
  return <ul className="answerOption">{answer}</ul>;
};

export default AnswerList;
