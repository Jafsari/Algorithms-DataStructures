class Tree{
    constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
    }
  insert(data){
    if (data <= this.data){
      if(!this.left){
        this.left = new Tree(data);
      } else {
        this.left.insert(data);
      }
    }
    if (data >= this.data){
        if(!this.right){
          this.right = new Tree(data);
        } else {
          this.right.insert(data);
        }
      }
  }
  contains(data){
    if (data === this.data){
      return this;
    } else {
      if (data < this.data){
        if(!this.left){
          return false;
        } else {
          return this.left.contains(data);
        }
      }
      if (data > this.data){
        if(!this.right){
          return false;
        } else {
          return this.right.contains(data);
        }
      }
    }
  }
  
  //BreadthFirstSearch Left Side
  BFSL(){
    var arr =[];
    var queue = [this];
      while(queue.length){
        var treeNode = queue.shift();
        arr.push(treeNode.data);
        if(treeNode.left){
          queue.push(treeNode.left);
        }
        if(treeNode.right){
          queue.push(treeNode.right);
        }
      }
      return arr;
  }
  //BreadthFirstSearch Right side
  BFSR(){
    var arr =[];
    var queue = [this];
      while(queue.length){
        var treeNode = queue.shift();
        arr.push(treeNode.data);
        if(treeNode.right){
          queue.push(treeNode.right);
        }
        if(treeNode.left){
          queue.push(treeNode.left);
        }
      }
      return arr;
  }
  //Root-Left-Right
  preOrder(){
    var container = [];
    var node = this;
    function traverse (node) {
        container.push(node.data);
        if(node.left){
          traverse(node.left);
        }
        if(node.right){
          traverse(node.right);
        }
    }
    traverse(node);
    return container;
  }
  //Left-Root-Right
  inOrder(){
    var container = [];
    var node = this;
   function traverse (node) {
        if (node.left) {
          traverse(node.left);
        }
        container.push(node.data);
        if (node.right){
          traverse(node.right);
        }
   }
    traverse(node);
    return container;
  }
  //Left-Right-Root
  postOrder(){
    var container = [];
    var node = this;
    function traverse (node) {
        if (node.left) {
          traverse(node.left);
        }
        if (node.right) {
          traverse(node.right);
        }
        container.push(node.data);
    }
    traverse(node);
    return container;
  }
  // I believe this works for minimal tree.
  MinimalTree(arr){
    var middle = Math.floor(arr.length / 2)
      var tree = new Tree(arr[middle])
      for (var i = arr[middle - 1]; i > 0 ; i--){
        var value = arr[i]
        tree.insert(value)
      }
      for(var j = arr[middle] ; j < arr.length ; j ++){
        var valueGreater = arr[j]
        tree.insert(valueGreater)
      }
      return tree;
  }
  
}

var cool = new Tree(50);
// cool.insert(25);
// cool.insert(75);
// cool.insert(10);
// cool.insert(60);
// cool.insert(35);
// cool.insert(85);
// cool.contains(25);
// cool.postOrder();
cool.MinimalTree([1,2,3,4,5,6])