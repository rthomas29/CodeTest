import React from 'react';
import { Button } from 'reactstrap';

const GraphText = props => (
  <div className="graph">
    <aside>
      <p className="text-md-left lead">
        You answered {props.totalCorrect} out of {props.questionCount} questions correctly.<br />
      </p>
      <div className="btns" className="float-left">
        <Button id="button" color="primary" onClick={props.handleToggle}>
          More Details
        </Button>
        <Button color="danger" onClick={props.toggleLanding}>
          Try Again
        </Button>
      </div>
    </aside>
  </div>
);

export default GraphText;
