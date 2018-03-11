class HashNode{
    constructor(key,value,next = null){
      this.key = key
      this.value = value
      this.next = next
    }
  }
  
  class HashTable{
    constructor(size){
      this.buckets = new Array(size)
      this.size = this.buckets.length
    }
    hash(key){
      var total = 0;
      for(var i = 0; i < key.length ; i ++){
        total += key.charCodeAt(i)
      }
      var bucket = total % this.size
      return bucket
    }
    insert(key,value){
      var index = this.hash(key)
      if (!this.buckets[index]){
        this.buckets[index] = new HashNode(key,value)
      } else {
        if (this.buckets[index].key === key){
          this.buckets[index].value = value
        }
      }
      var currentNode = this.buckets[index]
      while(currentNode.next){
        if(currentNode.next.key === key){
          currentNode.next.value = value;
          return;
        }
        currentNode = currentNode.next
      }
      currentNode.next = new HashNode(key,value)
    }
    get(key){
      var index = this.hash(key)
      if(!this.buckets[index]){
        return null;
      }
      var currentNode = this.buckets[index]
      while(currentNode){
        if(currentNode.key === key){
          return currentNode
        }
        currentNode = currentNode.next
      }
      return null
    }
    retrieveAll(){
      var container = []
      for(var i = 0; i < this.size ; i ++){
        var currentNode = this.buckets[i]
        while (currentNode){
          container.push(currentNode)
          currentNode = currentNode.next
        }
        }
        return container;
    }
  }
  
  var friends = new HashTable(10);
  friends.insert('justin',5)
  friends.insert('dom',10)
  friends.insert('kian',15)
  friends.insert('edward',20)
  friends.insert('Rebecca',25)
  friends.insert('Pedro',30)
  console.log(friends.retrieveAll())