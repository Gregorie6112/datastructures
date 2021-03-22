import React from 'react';
import {Container} from 'react-bootstrap';
import '../css/MainContainer.css';
import RenderBinaryTree from './RenderTree.jsx';

const MainContainer = () => {
  return (
    <Container className="mainContainer" fluid>
      <RenderBinaryTree />
    </Container>
  )
};
export default MainContainer;