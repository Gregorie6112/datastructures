import React from 'react';
import '../css/RenderTree.css';
import {Col, Row} from 'react-bootstrap';

const RenderBinaryTree = () => (
  <>
  <Row className="circle">
    <Col className="number">
      10
    </Col>
  </Row>
  <Row className="circle">
  <Col className="number" >
      10
  </Col>
</Row>
</>
);
export default RenderBinaryTree;