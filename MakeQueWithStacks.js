// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2


class Stack {
    constructor() {
      this.data = [];
    }
  
    push(record) {
      this.data.push(record);
    }
  
    pop() {
      return this.data.pop();
    }
  
    peek() {
      return this.data[this.data.length - 1];
    }
  }

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(item) {
        this.first.push(item)
    }
    remove(){
        while(this.first.peek() !== undefined) {
            this.second.push(this.first.pop())
        }
        const item = this.second.pop()
        while (this.second.peek() !== undefined){
            this.first.push(this.second.pop())
        }
        return item;
    }
    peek() {
        while (this.first.peek() !== undefined){
            this.second.push(this.first.pop())
        }
        const item = this.second.peek()
        
        while (this.second.peek() !== undefined){
            this.first.push(this.second.pop())
        }
        return item;
    }
    }

    // Works, but it's a bit hacky, and I want to re do it later.

class Node{
    constructor(data,next = null){
      this.data = data;
      this.next = next;
    }
  }
  
  class Stack{
    constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
    }
    push(data){
      let node = new Node(data)
      if (!this.first){
        this.first = node;
        this.last = node;
        return this.size++
      }
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
      return this.size++
    }
    pop(){
        if (!this.first)
        return null;
  
      var temp = this.first;
  
      if (this.first==this.last) {
        this.last=null;
      }
  
      this.first = this.first.next;
      this.size--;
      return temp.data
  
      }
    peek(){
     return this.first
    }
  }
  
  // var stack = new Stack();
  
  // stack.push(1)
  // stack.push(2)
  // stack.push(3)
  // stack.pop()
  // stack.pop()
  
  
  class myQueue {
    constructor(){
      this.head = new Stack();
      this.second = new Stack();
    }
    enqueue(data){
      this.head.push(data)
    }
    dequeue(){
      while (this.head.peek() !== null){
       this.second.push(this.head.pop())
        }
      let item = this.second.pop();
      while(this.second.peek() !== null){
        this.head.push(this.second.pop())
      }
      return item;
    }
  }
  
  var Queue = new myQueue();
  Queue.enqueue(1)
  Queue.enqueue(2)
  Queue.enqueue(3)
  Queue.dequeue()
  
    