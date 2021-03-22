import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../css/Navbar.css';

const Header = () => {
  return (
    <Navbar className="navColor" bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link className="changeNavColor" href="https://gregorie-calderon-portfolio.herokuapp.com/" target="_blank">PORTFOLIO</Nav.Link>
      <Nav.Link className="changeNavColor" href="https://docs.google.com/document/d/1o4SmMeDEa5vEGEySCZYZlHP7nbTU1Czj61qPd_tPnlg/edit?usp=sharing" target="_blank">JOURNAL</Nav.Link>
      <Nav.Link className="changeNavColor" >BINARY SEARCH TREE</Nav.Link>
      <Nav.Link className="changeNavColor" >LINKEDLISTS</Nav.Link>
    </Nav>
  </Navbar>
  )
};
export default Header;