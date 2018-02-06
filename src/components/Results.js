import React from 'react';
import PropTypes from 'prop-types';

const Results = props => {
  return (
    <div>
      <h3>Results</h3>
      <p>
        HTML: {props.results.HTML} of 2 - {props.calculateTotal(props.results.HTML, 2)}
      </p>
      <p>
        CSS: {props.results.CSS} of 2 - {props.calculateTotal(props.results.CSS, 2)}
      </p>
      <p>
        JavaScript: {props.results.JavaScript} of 2 - {props.calculateTotal(props.results.JavaScript, 2)}
      </p>
    </div>
  );
};

export default Results;
