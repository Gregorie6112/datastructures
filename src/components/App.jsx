import React from 'react';
import '../css/App.css';
import Header from './Navbar.jsx';
import MainContainer from './MainContainer.jsx';
import BinarySearchTree from '../BinarySearchTree.js';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      values: [10,1,15,30,60,90,5,9]
    }
    this.BubbleSort = this.BubbleSort.bind(this);
    this.visualizer = this.visualizer.bind(this);
  }
  visualizer(one, two) {
    let numberOne = document.getElementById(one);
    let numberTwo = document.getElementById(two);
    setTimeout(() => {
      console.log(numberOne, numberTwo)
    }, 1000)
  }

  BubbleSort() {
    let arr = this.state.values.slice();
    let swapped = false;
    let bubbleSortHelper = (array) => {
      swapped = false;
      let end = array.length - 1;
      for (var i = 0; i < end; i++) {
        let cur = array[i];
        let second = array[i + 1];
        this.visualizer(cur, second)
        if (cur > second) {
          swapped = true;
          let swap = cur;
          array[i] = second;
          array[i + 1] = cur;
        }
      }
      end--;
    }
    bubbleSortHelper(arr);

    while (swapped) {
      bubbleSortHelper(arr)
    }

    this.setState({
      values: arr
    })
  }

  render() {
    return (
      <>
      <Header />
      <MainContainer
      values={this.state.values}
      BubbleSort={this.BubbleSort}
      />
      </>
    )
  }
};
