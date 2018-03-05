// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

class Node { 
  constructor(data){
    this.data = data;
    this.children = [];
  }
  add(data) { 
    this.children.push(new Node(data))
  }
  remove(data){
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

function levelWidth(root) {
  const arr = [root, 's']; // create the first array with the root inside of it, and with a stopper
  const counters = [0]; // initiate the counters array to have 0 from the beginning

  while (arr.length > 1) { //loop as long as the length of the array is greater than 1
    const node = arr.shift(); // grab the first node out of the array

    if (node === 's') { // if it is equal to s
      counters.push(0); // add a new number into the counters array, to start a new count of the new tree level
      arr.push('s'); // add the stopper back in
    } else {
      arr.push(...node.children); // add the children to the back fo the array
      counters[counters.length - 1]++; // increment the current counter for the tree level
    }
  }

  return counters;
}