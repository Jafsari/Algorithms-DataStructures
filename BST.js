// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
    insert(data) {
      if (data < this.data && this.left) { // check if data is less than the root , and the left node is true
        this.left.insert(data); // it it is, and there is already a left to that root, keep recursing down the tree
      } else if (data < this.data) { // If their is no left, create a new node and add it to the tree.
        this.left = new Node(data);
      } else if (data > this.data && this.right) { // same goes with greater
        this.right.insert(data);
      } else if (data > this.data) {
        this.right = new Node(data);
      }
    }
    contains(data) {
        if (this.data === data) { //if the root is equal to data return it
          return this;
        }
            // recursively go down the search tree 
        if (data > this.data && this.right) { 
          return this.right.contains(data);
        } else if (data < this.data && this.left) {
          return this.left.contains(data);
        }
    
        return null;
      }
    
  


}