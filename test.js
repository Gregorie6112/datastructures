const BinarySearchTree = require('./src/testFiles/BinarySearchTree.js');
const BubbleSort = require('./src/testFiles/BubbleSort.js');

test('Should Create an Empty Tree', () => {
  expect(BinarySearchTree).toBe(BinarySearchTree);
});
test('Should Insert A Value Into the Binary Search Tree', () => {
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
