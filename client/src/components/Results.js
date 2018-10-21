import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { Modal, ModalHeader } from 'reactstrap';
import GraphText from './GraphText';
import ModalComponent from './ModalComponent';
import { calculateTotalCorrect, buildDonutData, donutOptions, buildBarData, barOptions } from './barUtils';
import '../stylesheets/Results.css';
import 'chartjs-plugin-datalabels';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };
    this.totalCorrect = calculateTotalCorrect(this.props.htmlTotal, this.props.cssTotal, this.props.jsTotal);
    this.donutData = buildDonutData(this.props.htmlTotal, this.props.cssTotal, this.props.jsTotal);
    this.barData = buildBarData(this.props.htmlTotal, this.props.cssTotal, this.props.jsTotal);
  }

  handleToggle = () => {
    this.setState(state => ({ modal: !state.modal }));
  };
  toggleNested = () => {
    this.setState(state => ({ nestedModal: !state.nestedModal, closeAll: false }));
  };
  render() {
    const { questionCount, toggleLanding, totalTypeCount, results } = this.props;
    const { modal, nestedModal, closeAll } = this.state;
    return (
      <div id="results-div" className="container w-75 d-flex justify-content-center">
        <div>
          <header className="header text-center">
            <h3 id="results-header" className="font-weight-light">
              How'd you do?
            </h3>
          </header>
          <div className="main-results d-flex flex-row">
            <GraphText
              totalCorrect={this.totalCorrect}
              questionCount={questionCount}
              handleToggle={this.handleToggle}
              toggleLanding={toggleLanding}
            />
            <div className="doughnut">
              <Doughnut data={this.donutData} options={donutOptions} />
              <Modal isOpen={modal} toggle={this.handleToggle} className="small">
                <ModalHeader toggle={this.handleToggle}>Breakdown</ModalHeader>
                <ModalComponent
                  barData={this.barData}
                  barOptions={barOptions}
                  results={results}
                  totalTypeCount={totalTypeCount}
                  toggleNested={this.toggleNested}
                  nestedModal={nestedModal}
                  closeAll={closeAll}
                  toggle={this.handleToggle}
                />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
  static PropTypes = {
    questionCount: PropTypes.number.isRequired,
    toggleLanding: PropTypes.func.isRequired
  };
}
