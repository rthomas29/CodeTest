import React from 'react';
import PropTypes from 'prop-types';

const Results = props => {
  return (
    <div>
      <h3>Results</h3>
      <p>HTML: {props.results.HTML}</p>
      <p>CSS: {props.results.CSS}</p>
      <p>HTML: {props.results.JavaScript}</p>
    </div>
  );
};

export default Results;
