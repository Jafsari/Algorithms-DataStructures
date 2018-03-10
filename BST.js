class Tree{
    constructor(data){
      this.data = data
      this.left = null
      this.right = null
    }
    insert(data){
    if(data <= this.data){
      if(!this.left) this.left = new Tree(data);
      else this.left.insert(data);
    }
      else if (data > this.data){
        if(!this.right) this.right = new Tree(data)
        else this.right.insert(data)
      }
    }
    contains(data){
      if (data === this.data) return this
      else if (data < this.data){
        if(!this.left) return false
        else return this.left.contains(data)
      }
      else if(data > this.data){
        if(!this.right) return false
        else return this.right.contains(data)
      }
    }
    depthFirstTraversal(fn,order){
      if(order === 'pre-order') fn(this.data)
      if (this.left) this.left.depthFirstTraversal(fn,order)
      if(order === 'in-order') fn(this.data)
      if(this.right)this.right.depthFirstTraversal(fn,order)
      if(order === 'post-order') fn(this.data)
    }
    breadthFirstTraversal(fn){
      var queue = [this];
      while(queue.length){
        var treeNode = queue.shift();
        fn(treeNode)
        if(treeNode.left){
          queue.push(treeNode.left)
        }
        if(treeNode.right){
          queue.push(treeNode.right)
        }
      }
    }
    getMinVal(){
      if(!this.data){
        return null
      }
    if(!this.left){
      return this.data
    } else {
      return this.left.getMinVal()
    }
      }
    getMaxVal(){
      if(!this.data){
        return null;
      }
      if(!this.right){
        return this.data
      } else {
        return this.right.getMaxVal();
      }
    }
  }
  
  let cool = new Tree(50);
  cool.insert(30)
  cool.insert(70)
  cool.insert(40)
  cool.insert(60)
  cool.getMaxVal()
  
  function log(data){
    console.log(data.data)
  }
  
  