class Stack{
    constructor(capacity){
      this.capacity = capacity || Infinity;
      this.storage = {};
      this.count = 0;
    }
    push(value){
      if (this.count < this.capacity){
        this.storage[this.count++] = value;
        return this.count;
      }
      return 'Maximum Stack exceeded'
    }
    pop(){
      if (this.count === 0){
        return 'There is nothing to remove'
      }
      var value = this.storage[--this.count];
      delete this.storage[this.count];
      if (this.count < 0){
        this.count = 0;
      }
      return value
    }
    peek(){
      return this.storage[this.count-1]
    }
    count(){
      return this.count
    }
  }
  
  var pokemon = new Stack();
  pokemon.push('charmander')
  pokemon.push('squirtle')
  pokemon.push('bulbasaur')
  pokemon.push('pikachu')
  
  console.log(pokemon)

 /// Stack with a Linked List
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
    }
    push(data){
      let node = new Node(data)
      if (!this.first){
        this.first = node 
        this.last = node 
        return this.size++
      }
      let temporary = this.first
      this.first = node
      this.first.next = temporary
      return this.size++
    }
    pop(){
      if (!this.first){
        return null
      }
      if (this.first == this.last){
        this.first = null;
        this.last = null;
      }
      let temporary = this.first
      this.first = this.first.next
      this.size--
      return temporary
    }
    peek(){
      return this.first.data
    }
  }
  let cool = new Stack();
  cool.push(1)
  cool.push(2)
  console.log(cool.peek())
  console.log(cool)
  