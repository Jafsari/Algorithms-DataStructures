// This method works except I'm losing the this reference.
// Logic 100%, Syntax 90%
inOrderSuccessor(data){
    var left;
    if(this.data === data){
      if (this.right !== null){
        var temp = this.right.data;
        while (temp.left){
          temp = temp.left;
        }
        return temp;
      }
      if (this.right === null){
        return left;
      }
    }
    
    if (data < this.data){
      left = this.data;
      console.log(this.data);
      if (!this.left){
        return false;
      } else {
        return this.left.inOrderSuccessor(data);
      }
    }
    if (data > this.data){
      if (!this.right){
        return false;
      } else {
        return this.right.inOrderSuccessor(data);
      }
    }
    
}