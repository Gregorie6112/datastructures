class BinarySearchTree {
  constructor(value) {
    this.value = value || null;
    this.left = null;
    this.right = null;
  }
};
BinarySearchTree.prototype.insert = function (value) {
  let insertNode = new BinarySearchTree(value);
  let helper = (node) => {
    if (node.value > value) {
      if (node.left === null) {
        node.left = insertNode;
      } else {
        helper(node.left)
      }
    } else if (node.value < value) {
      if (node.right === null) {
        node.right = insertNode;
      } else {
      helper(node.right)
      }
    }
  };
  helper(this);
};
module.exports = BinarySearchTree;