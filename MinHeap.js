class MinHeap{
    constructor(){
      this.content = [2,3,5,4,8,7,6];
    }
    insert(element){
      this.content.push(element); //push to the end
      let currentIndex = this.content.length-1 // current Index is the last element
      let current = this.content[currentIndex]; //this is the current element
      while (currentIndex > 0) { // the index is greater than 0
        var parentIndex = Math.floor(( currentIndex + 1) /2) -1; // grab the parent index
        let parent = this.content[parentIndex]; // this is parent element
        
        if (current >= parent) { // if current is greater than the parent
          break; // then were done
        } else {
          let temp = parentIndex;
          [this.content[currentIndex],this.content[parentIndex]] = [this.content[parentIndex],this.content[currentIndex]]
          currentIndex = temp;
          parentIndex = Math.floor(( currentIndex + 1) /2) -1
        } // we swap
      }
      
  }
  
  remove(element){
    var length = this.content.length
    for (var i = 0; i < length ; i++){
      if (this.content[i] === element){
        [this.content[i],this.content[this.content.length-1]] = [this.content[this.content.length-1],this.content[i]]
        this.content.splice(length-1,1)
      }
      break;
    }
    var current = 0;
    var child2 = (current + 1) * 2 
    var child1 = child2 - 1;
    while (child1 < length){
      var firstChild = this.content[child1]
      var secondChild = this.content[child2]
      if(firstChild < secondChild){
      if (firstChild < this.content[current]){
        [this.content[current],this.content[child1]] = [this.content[child1],this.content[current]]
        current = child1;
        child2 = (current + 1) * 2
        child1 = child2 - 1;
      } else {
        
      }
    }
    }
    
  }
  size(){
    return this.content.length;
  }
  
  }
  
  let heap = new MinHeap();
  heap.remove(2)
  console.log(heap)