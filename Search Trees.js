// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree


class Node { //Creating the node
    constructor(data){
      this.data = data;
      this.children = [];
    }
    add(data) { //adding a new node with push method
      this.children.push(new Node(data))
    }
    remove(data){ //Using the built-in array filter method 
      this.children = this.children.filter(node => {
        return node.data !== data;
      });
    }
  }

class Tree {
    constructor(){
        this.root = null
    }
    traverseBFS(fn){
        const arr = [this.root] // create an array with the root already inside of it
        while(arr.length){ // as long as their is something inside of the array
        const node = arr.shift() // shift from the array
        arr.push(...node.children); // add the elements of the node's children
        fn(node)
        }
    }
    traverseDF(fn){
        const arr = [this.root] // create an array with the root inside of it
        while(arr.length){ // as long as the array is true
            const node = arr.shift(); // take out the first element of the array
            arr.unshift(...node.children) //add the children of the node to the front of the array instead of the back
            fn(node)// use function onto the node
        }
    }

}

