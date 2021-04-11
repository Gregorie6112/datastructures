import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/MainContainer.css';
import RenderBinaryTree from './RenderTree.jsx';
import RenderBubbleSort from './BubbleSort.jsx';

const MainContainer = (props) => {
  return (
    <Container className="mainContainer" fluid>
      <Row className="mainContainerRow">
        <Row>
          <p className="header">Welcome to BubbleSort! <br></br>Please select to sort or create a new set. </p>
        </Row>
        <Col className="valueHolder">
          <RenderBubbleSort values={props}/>
        </Col>
      </Row>
      <Row className="buttonContainer">
        <Col>
          <Row className="sortPopUp">
          {props.switchValues ?
           <p className="switchValues" id="switch" onClick={props.BubbleSort}>Switch</p> :
          null}
          </Row>
          <button className="button" id="sortButton" onClick={props.BubbleSort}>Sort</button>
          <button className="button" onClick={props.newSet}>New Set</button>
        </Col>
      </Row>
    </Container>
  )
};
export default MainContainer;