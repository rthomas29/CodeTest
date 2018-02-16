import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut, HorizontalBar } from 'react-chartjs-2';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ResultDetails from './ResultDetails';
import '../stylesheets/Results.css';
import 'chartjs-plugin-datalabels';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
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
        position: 'bottom',
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
          data: [this.htmlTotal, this.cssTotal, this.jsTotal],
          borderWidth: 1,
          backgroundColor: ['rgba(63,195,128, 0.2)', 'rgba(239,72,54,0.2)', 'rgba(65,131,215,0.2)'],
        },
      ],
    };
    this.barOptions = {
      legend: {
        display: false,
      },
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
  }
  handleToggle() {
    this.setState({ modal: !this.state.modal });
  }
  toggleNested() {
    this.setState({ nestedModal: !this.state.nestedModal, closeAll: false });
  }
  static PropTypes = {
    questionCount: PropTypes.number.isRequired,
    toggleLanding: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div id="results-div" className="container w-75 d-flex justify-content-center">
        <div className="">
          <header className="header text-center">
            <h3 id="results-header" className="font-weight-light">
              How'd you do?
            </h3>
          </header>
          <div className="main-results d-flex flex-row">
            <div className="graph">
              <aside>
                <p className="text-md-left lead">
                  You answered {this.totalCorrect} out of {this.props.questionCount} questions correctly.<br />
                  <div className="btns" className="float-left">
                    <Button id="button" color="primary" onClick={this.handleToggle}>
                      More Details
                    </Button>
                    <Button color="danger" onClick={this.props.toggleLanding}>
                      Try Again
                    </Button>
                  </div>
                </p>
              </aside>
            </div>
            <div className="doughnut">
              <Doughnut data={this.data} options={this.options} />
              <Modal isOpen={this.state.modal} toggle={this.handleToggle} className="small">
                <ModalHeader toggle={this.handleToggle}>Breakdown</ModalHeader>
                <ModalBody>
                  <aside>Let's take a closer look at your results</aside>
                  <HorizontalBar data={this.barData} options={this.barOptions} width={100} height={100} />
                  <ResultDetails results={this.props.results} totalTypeCount={this.props.totalTypeCount} />
                  <Button outline color="info" onClick={this.toggleNested}>
                    Click for resources
                  </Button>
                  <Modal
                    isOpen={this.state.nestedModal}
                    toggle={this.toggleNested}
                    onClosed={this.state.closeAll ? this.toggle : undefined}
                  >
                    <ModalHeader>Resources</ModalHeader>
                    <ModalBody>
                      <h3>Front End Web Development</h3>
                      <ul>
                        <li>
                          <a href="https://developer.mozilla.org/en-US/docs/Learn">MDN - Learn Web Development</a>
                        </li>
                        <li>
                          <a href="https://www.freecodecamp.org/">FreeCodeCamp - From 0 to Web Developer</a>
                        </li>
                        <li>
                          <a href="https://javascript.info/">JavaScript.info - Modern JavaScript tutorial</a>
                        </li>
                      </ul>
                    </ModalBody>
                    <ModalFooter>
                      <Button outline color="danger" onClick={this.toggleNested}>
                        Close
                      </Button>
                    </ModalFooter>
                  </Modal>
                </ModalBody>
                <ModalFooter>
                  <Button outline color="primary" onClick={this.handleToggle}>
                    Close
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
