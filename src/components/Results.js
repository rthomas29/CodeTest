import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { Button, Fade } from 'reactstrap';
import '../stylesheets/Results.css';
import 'chartjs-plugin-datalabels';

class Results extends Component {
  constructor(props) {
    super(props);
    this.htmlTotal = this.props.results.HTML;
    this.cssTotal = this.props.results.CSS;
    this.jsTotal = this.props.results.JavaScript;
    this.totalCorrect = this.props.results.HTML + this.props.results.CSS + this.props.results.JavaScript;
    this.data = {
      labels: ['HTML', 'CSS', 'JavaScript'],
      datasets: [
        {
          label: '# of correct answers',
          backgroundColor: ['rgba(50, 195, 255, 0.2)', '#FF6384', '#36A2EB'],
          data: [this.htmlTotal, this.cssTotal, this.jsTotal],
          hoverBackgroundColor: ['rgba(50, 195, 255, 0.2)', '#FF6384', '#36A2EB'],
          pointHoverBorderColor: 'rgba(50, 195, 255, 0.2)',
          pointBackgroundColor: 'rgba(23, 27, 236, 0.2)',
        },
      ],
    };
    this.options = {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: true,
        position: 'right',
      },
      plugins: {
        datalabels: {
          textAlign: 'center',
          color: '#fff',
        },
      },
    };
  }
  // keep the chart, remove the paragraphs.
  // show total correct divided by total, then give more details about graph.
  render() {
    return (
      <div id="results-div" className="container d-flex flex-column justify-content-center align-items-center">
        <div className="">
          <header className="header">
            <h3 id="results-header" className="font-weight-light">
              How'd you do?
            </h3>
          </header>
          <aside>
            <p className="text-md-left lead">{`You answered ${this.props.calculateResults(
              this.totalCorrect,
              this.props.questionCount,
            )} of the questions correctly.`}</p>
          </aside>
          <div className="doughnut">
            <Doughnut data={this.data} width={150} height={150} options={this.options} />
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
