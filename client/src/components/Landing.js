import React from 'react';
import '../stylesheets/Landing.css';
import { Button } from 'reactstrap';

export default function Landing({ toggleLanding }) {
  return (
    <div className="container d-flex justify-content-center" id="landing">
      <div className="row">
        <div className="main col col-md-6 col-sm-6">
          <div className="brand">
            <h1 className="display-3">CodeTest</h1>
            <p className="lead">Test your knowledge of Front End Web Development.</p>
            <Button color="success" onClick={toggleLanding}>
              Get Started
            </Button>
          </div>
        </div>
        <div className="explanation col col-md-6 col-md-6">
          <p className="lead">
            See where you stand by answering multiple-choice questions relating to HTML, CSS, and JavaScript.
          </p>
          <p className="lead">
            You'll get a chance to see the results of your assessment via a "points per category" breakdown.
          </p>
          <p className="lead">Receive links to online resources that will help improve your study process.</p>
        </div>
      </div>
    </div>
  );
}
