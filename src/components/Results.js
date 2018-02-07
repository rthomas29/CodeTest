import React from 'react';
import PropTypes from 'prop-types';
import { Radar } from 'react-chartjs-2';

import '../stylesheets/Results.css';

const Results = props => {
  const htmlTotal = props.results.HTML;
  const cssTotal = props.results.CSS;
  const jsTotal = props.results.JavaScript;
  const data = {
    labels: ['HTML', 'CSS', 'JavaScript'],
    datasets: [
      {
        label: '# of correct answers',
        data: [htmlTotal, cssTotal, jsTotal],
        backgroundColor: ['rgba(50, 195, 255, 0.2)'],
        pointHoverBackgroundColor: 'rgba(50, 195, 255)',
        pointHoverBorderColor: 'rgba(50, 195, 255)',
      },
    ],
  };
  return (
    <div className="container">
      <h3>Results</h3>
      <p>
        HTML: {props.results.HTML} of {props.totalTypeCount.HTML} -
        {props.calculateTotal(props.results.HTML, props.totalTypeCount.HTML)}
      </p>
      <p>
        CSS: {props.results.CSS} of {props.totalTypeCount.CSS} -
        {props.calculateTotal(props.results.CSS, props.totalTypeCount.CSS)}
      </p>
      <p>
        JavaScript: {props.results.JavaScript} of {props.totalTypeCount.JavaScript} -
        {props.calculateTotal(props.results.JavaScript, props.totalTypeCount.JavaScript)}
      </p>
      <div className="radar">
        <Radar data={data} width={150} height={150} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default Results;
