import React from 'react';
import PropTypes from 'prop-types';

const Results = props => {
  return (
    <div>
      <h3>Results</h3>
      <p>
        HTML: {props.results.HTML} of {props.totalTypeCount.HTML} - {props.calculateTotal(props.results.HTML, 2)}
      </p>
      <p>
        CSS: {props.results.CSS} of {props.totalTypeCount.CSS} - {props.calculateTotal(props.results.CSS, 2)}
      </p>
      <p>
        JavaScript: {props.results.JavaScript} of {props.totalTypeCount.JavaScript} -{' '}
        {props.calculateTotal(props.results.JavaScript, 2)}
      </p>
    </div>
  );
};

export default Results;
