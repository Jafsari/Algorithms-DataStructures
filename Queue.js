class Node {
  constructor(value,next= null){
    this.value = value
    this.next = next
  }
}

class Queue {
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0;
  }
  enqueue(value){
      let node = new Node(value)
    if(!this.head){
      this.head = node
      this.tail = node
      return ++this.size
    }
    this.tail.next = node
    this.tail = node
    return ++this.size
  }
  dequeue(){
    if (!this.head){
      return null;
    }
    let temp = this.head
    if (this.head === this.tail){
      this.tail = null
      this.head = null
      return --this.size
    }
    this.head = this.head.next
    return --this.size
    return temp
  }
  peek(){
    return this.head.value
  }
}