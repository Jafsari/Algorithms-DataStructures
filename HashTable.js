class HashNode{
    constructor(key,value,next){
      this.key= key
      this.value = value;
      this.next = next|| null
    }
  }
  
  class HashTable{
    constructor(size){
      this.bucket = new Array(size)
      this.numBuckets = this.bucket.length
    }
    hash(key){
      var total = 0;
      for(var i = 0; i < key.length ; i ++){
        total+=key.charCodeAt(i)
      }
      var bucket = total % this.numBuckets;
      return bucket
    }
    insert(key,value){
      var index = this.hash(key);
      if (!this.bucket[index]){this.bucket[index] = new HashNode(key,value)
      } else if (this.bucket[index].key === key){
        this.bucket[index].key = value;
      }
      {
        var currentNode = this.bucket[index]
        while (currentNode.next){
          if(currentNode.next.key === key){
            currentNode.next.value = value;
            return;
          }
          currentNode = currentNode.next
        }
        currentNode.next = new HashNode(key,value)
      }
    } 
    get(key){
      let index = this.hash(key)
      if(!this.bucket[index]){
        return null
      } else {
        var currentNode = this.bucket[index]
        while (currentNode){
          if(currentNode.key === key){
            return currentNode.value
          }
          currentNode = currentNode.next
        }
        return null
      }
    }
  }
  
  let hash = new HashTable(30)
  hash.insert('justin',3)
  hash.insert('justin',10)
  hash.insert('justin',10)
  hash.insert('justin',10)
  console.log(hash)