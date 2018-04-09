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
  subTree(tree){
    var arr = this.inOrder();
    var container = this.inOrder.call(tree);
      arr = arr.toString('');
      container = container.toString('');
      return arr.includes(container);
    }
  }