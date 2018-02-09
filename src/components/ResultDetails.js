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
        <Button outline color="info" className="btn btn-sm">
          Click for resources
        </Button>
      </p>
      <h4>CSS</h4>
      <p>
        You answered {props.results.CSS} out of {props.totalTypeCount.CSS} questions correctly.
        <Button outline color="info" className="btn btn-sm">
          Click for resources
        </Button>
      </p>
      <h4>JavaScript</h4>
      <p>
        You answered {props.results.JavaScript} out of {props.totalTypeCount.JavaScript} questions correctly.
        <Button outline color="info" className="btn btn-sm">
          Click for resources
        </Button>
      </p>
    </section>
  );
};

export default ResultDetails;
