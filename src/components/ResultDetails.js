import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/ResultDetails.css';

ResultDetails.PropTypes = {
  results: PropTypes.object.isRequired,
  totalTypeCount: PropTypes.object.isRequired,
};

export default function ResultDetails(props) {
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
}
