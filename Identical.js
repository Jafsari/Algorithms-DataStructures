Identical(tree1,tree2){
    var container = [];
    var box = [];
    function traverse (node) {
        if (node.left) {
          traverse(node.left);
        }
        container.push(node.data);
        box.push(node.data);
        if (node.right){
          traverse(node.right);
        }
   }
    traverse(node);
    return container.toString('') === box.toString('');
    }