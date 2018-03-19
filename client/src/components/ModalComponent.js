import React from 'react';
import { Doughnut, HorizontalBar } from 'react-chartjs-2';
import ResultDetails from './ResultDetails';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalComponent = props => (
  <ModalBody>
    <aside>Let's take a closer look at your results</aside>
    <HorizontalBar data={props.barData} options={props.barOptions} width={100} height={100} />
    <ResultDetails results={props.results} totalTypeCount={props.totalTypeCount} />
    <Button outline color="info" onClick={props.toggleNested}>
      Click for resources
    </Button>
    <Modal
      isOpen={props.nestedModal}
      toggle={props.toggleNested}
      onClosed={props.closeAll ? props.toggle : undefined}
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
        <Button outline color="danger" onClick={props.toggleNested}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  </ModalBody>
);

export default ModalComponent;