Sum(){
    var sum = 0;
    var node = this;
    function traverse(node){
      if (node.left){
        traverse(node.left);
      }
      sum += node.data;
      
      if (node.right){
        traverse(node.right);
      }
    }
    traverse(node)
    return sum;
  }