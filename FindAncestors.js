ancestors(data){
    var container = [];
    var node = this;
    function traverse (node) {
        if (data < node.data) {
          container.push(node.data);
          traverse(node.left);
        }
        if (data > node.data) {
          container.push(node.data);
          traverse(node.right);
        }
        
    }
    traverse(node);
    return container;
  }
}