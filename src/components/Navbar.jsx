import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../css/Navbar.css';

const Header = () => {
  return (
    <Navbar className="navColor" bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link className="changeNavColor" >PORTFOLIO</Nav.Link>
      <Nav.Link className="changeNavColor" href="https://gregorie-calderon-portfolio.herokuapp.com/" target="_blank">JOURNAL</Nav.Link>
      <Nav.Link className="changeNavColor" href="https://www.linkedin.com/in/gregorie-calderon" target="_blank">BINARY SEARCH TREE</Nav.Link>
      <Nav.Link className="changeNavColor" href="https://docs.google.com/document/d/11bhCYVx_JpK6c71dc8WD7PjoN1nJqg1FxH6fDz_A1Vw/edit?usp=sharing" target="_blank" >LINKEDLISTS</Nav.Link>
    </Nav>
  </Navbar>
  )
};
export default Header;