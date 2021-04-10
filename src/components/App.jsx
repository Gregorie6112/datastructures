import React from 'react';
import '../css/App.css';
import Header from './Navbar.jsx';
import MainContainer from './MainContainer.jsx';
import BinarySearchTree from '../testFiles/BinarySearchTree.js';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      timeOuts: [],
      values: [10,1,15,30,60,90,5,2],
      switchValues: false,
    }
    this.BubbleSort = this.BubbleSort.bind(this);
    this.visualizer = this.visualizer.bind(this);
    this.switchVisualizer = this.switchVisualizer.bind(this);
    this.newSet = this.newSet.bind(this);

  }
  // Renders a new set and randomizes it and clears timeouts
  newSet() {
    this.state.timeOuts.forEach(el => {
      clearTimeout(el)
    })
    this.setState({
      switchValues: false,
      timeOuts: []
    })
    let tempObj = {};
    let max = 50;
    let arr = [];
    let random = Math.floor(Math.random() * max);
    while(Object.keys(tempObj).length < 8) {
      tempObj[random] = 1;
      random = Math.floor(Math.random() * max);
    }
    Object.keys(tempObj).forEach(el => {
      arr.push(Number(el));
    })
    arr.sort(() => Math.random() - 0.5);
    this.setState({
      values: arr
    })
  }
  // SWitches Id's and Divs innerText
  switchVisualizer(one, two) {
    let temp = one.innerText;
    let tempId = one.id;
    let switchTag = document.getElementById('switch');
    setTimeout(() => {
      // Change the color of the switch tag and a setTimeout to switch it back to black after
      switchTag.style.backgroundColor = '#8dcb91'
      setTimeout(() => {
        switchTag.style.backgroundColor = '#ff6565'
      }, 500)
      // Changing Inner Text
      one.innerText = two.innerText;
      two.innerText = temp;
      // Change Div Id
      one.id = two.id;
      two.id = tempId;
    }, 1000);
  }
  // Changes colors of borders for compared elements
  visualizer(one, two) {
    let numberOne = document.getElementById(one);
    let numberTwo = document.getElementById(two);
    // Render Both Numbers Red And Blue
    numberOne.className = 'numbers1';
    numberOne.style.border = '2px solid red'
    numberTwo.className = 'numbers1';
    numberTwo.style.border = '2px solid blue'
    if (one > two) {
      // Call on Second Function That Switches Id's and Value Of Div
      this.switchVisualizer(numberOne, numberTwo)
    }
    // Change the border and color back to normal
    setTimeout(() => {
        numberOne.className = 'numbers';
        numberTwo.className = 'numbers';
        numberOne.style.border = '2px solid #8ecc91'
        numberTwo.style.border = '2px solid #8ecc91'
      }, 1000)
  }

  BubbleSort() {
    this.setState({
      switchValues: true,
    })
    let arr = this.state.values.slice();
    let stateTimeOuts = this.state.values.slice();
    let swapped = false;
    let timer = 1000;
    let end = arr.length - 1;
    let bubbleSortHelper = (array) => {
      swapped = false;
      for (var i = 0; i < end; i++) {
        let cur = array[i];
        let second = array[i + 1];
        stateTimeOuts.push(setTimeout(() => {
          this.visualizer(cur, second)

        }, 1500 + timer))
        this.setState({
          timeOuts: stateTimeOuts
        })
        timer += 1700;
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
    // Timed for the end and updates state for a sorted array
    setTimeout(() => {
      this.setState({
        switchValues: false,
        values: arr
      })
      alert('Done Sorting')
    }, 50000)
  }

  render() {
    return (
      <>
        <Header />
        <MainContainer
          values={this.state.values}
          BubbleSort={this.BubbleSort}
          newSet={this.newSet}
          switchValues={this.state.switchValues}
        />
      </>
    )
  }
};
