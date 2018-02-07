import React from 'react';
import PropTypes from 'prop-types';
import { Radar } from 'react-chartjs-2';

const Results = props => {
  const htmlTotal = props.results.HTML;
  const cssTotal = props.results.CSS;
  const jsTotal = props.results.JavaScript;
  const data = {
    labels: ['HTML', 'CSS', 'JavaScript'],
    datasets: [
      {
        label: 'Points per category',
        data: [htmlTotal, cssTotal, jsTotal],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      },
    ],
  };
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
      <Radar data={data} width={150} height={300} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default Results;
