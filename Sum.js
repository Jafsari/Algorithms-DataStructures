
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
    kth(index){
      var counter = 0;
      var node = this.head;
      var cool = this.head
      while(node){
        counter++
        node = node.next;
      }
      var find = counter - index;
      counter = 0;
      while(cool){
        if (counter === find){
          return cool;
        }
        counter++
        cool = cool.next
      }
    }
    sum(){
      var arr = [];
      var node = this.head;
      while(node){
        arr.unshift(node.data)
        node = node.next
      }
    var middle = Math.floor(arr.length/2)
    var first = arr.slice(0,middle)
    var second = arr.slice(middle)
    first = first.join('')
    first = + first
    second = second.join('')
    second = + second;
     if(arr.length === 3){
        sum = arr.join('')
        sum = + sum
        var woo = sum.toString().split('').reverse('').map(function(number){
          return + number
        })
        var cool = new LinkedList();
       for (var j = 0; j < woo.length ; j++){
         cool.insertFirst(woo[j])
       }
       return cool;
      }
    if (second){
    var sum = first + second;
    } else {
      sum = first;
    }
    var array = sum.toString().split('').reverse('').map(function(number){
      return + number
    });
    var Linked = new LinkedList();
    for (let i = 0; i <  array.length ; i ++){
   Linked.insertFirst(array[i])
    }
    return Linked;
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
  
  
  
  console.log(LL.sum())
  