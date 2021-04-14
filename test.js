const react = require('react');
const renderer  = require('react-test-renderer');
const BinarySearchTree = require('./src/testFiles/BinarySearchTree.js');
const BubbleSort = require('./src/testFiles/BubbleSort.js');

describe('React Component', () => {

})
describe('Bubble Sort', () => {

  it('Bubble Sort Should Exist', () => {
    expect(BubbleSort).not.toBe(undefined);
  });

  it('Bubble Sort should sort an array', () => {
    let unSorted = [10,3,5,9,0,1,4,6,12,14];
    let internalSort = unSorted.sort((a,b) => a-b);
    let bubbleSort = BubbleSort(unSorted);
    for (var i = 0; i < bubbleSort.length; i++) {
      expect(bubbleSort[i]).toBe(internalSort[i]);
    };
  });
})
describe('Binary Tree', () => {

  it('Should Create an Empty Tree', () => {
    expect(BinarySearchTree).toBe(BinarySearchTree);
  });

  it('Should Insert A Value Into the Binary Search Tree', () => {
    let tree = new BinarySearchTree(10);
    tree.insert(9);
    let values = [];
    let depthFirstHelper = (node) => {
      if (node === null) {
        return;
      }
      if (node.value !== undefined) {
        values.push(node.value);
      }
      depthFirstHelper(node.left);
      depthFirstHelper(node.right);
    }
    let depthFirstSearch = (tree) => {
      return depthFirstHelper(tree);
    }
    depthFirstSearch(tree);
    expect(values).toContain(9);
  });
})
// test('Should Find A Value In the Binary Search Tree', () => {
//   expect('').toBe();
// });
// test('Should Delete A Value In the Binary Search Tree', () => {
//   expect('').toBe();
// });
// test('Should Map All Values In the Binary Search Tree and return a sorted array', () => {
//   expect('').toBe();
// });
// test('Should Invert the Binary Search Tree', () => {
//   expect('').toBe();
// });
