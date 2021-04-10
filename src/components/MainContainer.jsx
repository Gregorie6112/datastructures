import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/MainContainer.css';
import RenderBinaryTree from './RenderTree.jsx';
import RenderBubbleSort from './BubbleSort.jsx';

const MainContainer = (props) => {
  return (
    <Container className="mainContainer" fluid>
      <Row>
        <Row>
          <p className="header">Welcome to BubbleSort! <br></br>Please select to sort or create a new set. </p>
        </Row>
        <Col className="valueHolder">
          <RenderBubbleSort values={props}/>
        </Col>
      </Row>
      <Row className="buttonContainer">
        <Col>
          <button className="button" onClick={props.BubbleSort}>Sort</button>
          <button className="button" onClick={props.newSet}>New Set</button>
        </Col>
      </Row>
    </Container>
  )
};
export default MainContainer;