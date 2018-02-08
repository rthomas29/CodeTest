import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
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
            <Doughnut data={this.data} width={150} height={150} options={this.options} />
            <Modal isOpen={this.state.modal} toggle={this.handleToggle} className={this.props.className}>
              <ModalHeader toggle={this.handleToggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.handleToggle}>
                  Do Something
                </Button>{' '}
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
