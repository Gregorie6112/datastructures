import React from 'react';
import '../css/App.css';
import Header from './Navbar.jsx';
import MainContainer from './MainContainer.jsx';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {

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
