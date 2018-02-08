import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

import '../stylesheets/Results.css';

const Results = props => {
  // keep the chart, remove the paragraphs.
  // show total correct divided by total, then give more details about graph.
  const htmlTotal = props.results.HTML;
  const cssTotal = props.results.CSS;
  const jsTotal = props.results.JavaScript;
  const totalCorrect = props.results.HTML + props.results.CSS + props.results.JavaScript;
  const data = {
    labels: ['HTML', 'CSS', 'JavaScript'],
    datasets: [
      {
        label: '# of correct answers',
        backgroundColor: ['rgba(50, 195, 255, 0.2)', '#FF6384', '#36A2EB'],
        data: [htmlTotal, cssTotal, jsTotal],
        hoverBackgroundColor: ['rgba(50, 195, 255, 0.2)', '#FF6384', '#36A2EB'],
        pointHoverBorderColor: 'rgba(50, 195, 255, 0.2)',
        pointBackgroundColor: 'rgba(23, 27, 236, 0.2)',
      },
    ],
  };
  return (
    <div id="results-div" className="container">
      <div className="d-flex flex-column">
        <header className="header">
          <h3>Results</h3>
        </header>
        <aside>
          <p className="text-primary">{`You answered ${props.calculateResults(
            totalCorrect,
            10,
          )} of questions correctly`}</p>
        </aside>
        <div className="radar">
          <Doughnut data={data} width={150} height={150} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default Results;
