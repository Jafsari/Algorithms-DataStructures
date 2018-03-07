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
  