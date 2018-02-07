import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import AnswerList from './AnswerList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../stylesheets/Quiz.css';

const Quiz = props => {
  return (
    <ReactCSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.questionId}>
        <Question content={props.content} questionCount={props.questionCount} />
        <AnswerList
          answers={props.answers}
          onAnswerSelection={props.onAnswerSelection}
          selectedAnswer={props.selectedAnswer}
          correct={props.correct}
          type={props.type}
        />
      </div>
    </ReactCSSTransitionGroup>
  );
};

export default Quiz;

Quiz.PropTypes = {
  content: PropTypes.string.isRequired,
};
