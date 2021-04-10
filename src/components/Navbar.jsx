import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../css/Navbar.css';

const Header = () => {
  return (
    <Navbar className="navColor" bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link className="changeNavColor" href="https://gregorie-calderon-portfolio.herokuapp.com/" target="_blank">PORTFOLIO</Nav.Link>
      <Nav.Link className="changeNavColor" >BUBBLE SORT</Nav.Link>
    </Nav>
  </Navbar>
  )
};
export default Header;