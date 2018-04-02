class Node{
    constructor(data,next = null){
      this.data = data
      this.next = next
    }
  }
  
  class Stack {
    constructor(){
      this.first = null
      this.last = null
      this.size = 0;
      this.min = [null];
    }
    push(data){
      let node = new Node(data)
      if (!this.first){
        this.first = node 
        this.last = node 
        this.min[0]= node.data
        return this.size++
      }
      
      let temporary = this.first
      this.first = node
      if (this.first.data < this.min[0]){
        this.min[0] = this.first.data
      }
      this.first.next = temporary
      return this.size++
    }
    minimum(){
      if (this.min){
        return this.min[0]
      } else {
        return null;
      }
    }
    pop(){
      if (!this.first){
        return null
      }
      
      if (this.first == this.last){
        this.first = null;
        this.last = null;
      }
      var temp = this.first
      this.first = this.first.next
      this.size--
      return temp.data
    }
    peek(){
      return this.first.data
    }
  }

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(0)
stack.push(-1)
console.log(stack)