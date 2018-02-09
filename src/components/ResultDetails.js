import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import '../stylesheets/ResultDetails.css';

const ResultDetails = props => {
  return (
    <section className="bar-details">
      <h4>HTML</h4>
      <p>
        You answered {props.results.HTML} out of {props.totalTypeCount.HTML} questions correctly.
      </p>
      <h4>CSS</h4>
      <p>
        You answered {props.results.CSS} out of {props.totalTypeCount.CSS} questions correctly.
      </p>
      <h4>JavaScript</h4>
      <p>
        You answered {props.results.JavaScript} out of {props.totalTypeCount.JavaScript} questions correctly.
      </p>
    </section>
  );
};

export default ResultDetails;