class Node {
    constructor(data,next = null){
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList{
    constructor(){
      this.head = null;
      this.size = null;
    }
    insertFirst(data){
      const node = new Node(data,this.head)
      this.head = node;
      this.size++
    }
    getFirst(){
      return this.head
    }
    getLast(){
      if (!this.head){
        return null;
      } else {
        let node = this.head;
        while(node.next){
          node = node.next
        }
        return node;
      }
    }
    print(){
    var node = this.head;
    console.log('start of linked list');
    while (node !== null) {
      console.log(node.data);
      node = node.next;
    }
    console.log('end of linked list');
    }
  
    removeDuplicates(){
      let curr = this.head.next
      let prev = this.head;
      var hash = {};
      if (prev){
        hash[prev.data] = 1;
      }
      while (curr){
        if (!hash[curr.data]){
          hash[curr.data] = 1;
          prev = curr;
          curr = curr.next;
        } else {
         var store = curr.next;
         prev.next = store;
         curr = store;
        }
      }
      return hash;
    }
  }
  
  
  var LL = new LinkedList();
  LL.insertFirst(8)
  LL.insertFirst(7)
  LL.insertFirst(6)
  LL.insertFirst(6)
  LL.insertFirst(5)
  LL.insertFirst(4)
  LL.insertFirst(3)
  LL.insertFirst(2)
  LL.insertFirst(1)
  
  
  LL.removeDuplicates()
  
  LL.print();