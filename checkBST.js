checkBST(){
    let result = this.inOrder();
    let middle = Math.floor(result.length / 2);
    let boo = true;
    if (result[middle] !== this.data){
      return false;
    }
      for (var i = 0; i < result.length ; i++){
        if (result[i] > result[i+1]){
          boo = false;
        }
        
      }
      return boo;
    }