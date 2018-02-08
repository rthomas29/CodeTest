import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut, HorizontalBar } from 'react-chartjs-2';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../stylesheets/Results.css';
import 'chartjs-plugin-datalabels';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
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
    this.barData = {
      labels: ['HTML', 'CSS', 'JavaScript'],
      datasets: [
        {
          label: 'Point per category breakdown',
          data: [this.htmlTotal, this.cssTotal, this.jsTotal],
          borderWidth: 1,
        },
      ],
    };
    this.barOptions = {
      legend: {
        display: true,
        position: 'top',
      },
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            barThickness: 100,
          },
        ],
      },
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({ modal: !this.state.modal });
  }
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
            <Button color="primary" onClick={this.handleToggle}>
              More Details
            </Button>
          </aside>
          <div className="doughnut">
            <Doughnut data={this.data} options={this.options} />
            <Modal isOpen={this.state.modal} toggle={this.handleToggle} className="small">
              <ModalHeader toggle={this.handleToggle}>Breakdown</ModalHeader>
              <ModalBody>
                <aside>Let's take a closer look at your results</aside>
                <HorizontalBar data={this.barData} options={this.barOptions} width={100} height={100} />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.handleToggle}>
                  Do Something
                </Button>
                <Button color="secondary" onClick={this.handleToggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
