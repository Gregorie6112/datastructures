import React from 'react';
import '../css/App.css';
import Header from './Navbar.jsx';
import MainContainer from './MainContainer.jsx';
import BinarySearchTree from '../BinarySearchTree.js';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      view: 'BinarySearchTree'
    }
  }
  render() {
    return (
      <>
      <Header />
      <MainContainer />
      </>
    )
  }
};
