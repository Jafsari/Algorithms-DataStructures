class Node{
    constructor(data,next,prev){
      this.data = data
      this.next = next
      this.prev = prev
    }
 }
 
 class LinkedList{
   constructor(){
     this.head = null
     this.tail = null
     this.size = 0;
   }
   addtoHead(val){
     var newNode = new Node(val,this.head,null)
     if (this.head){
       this.head.prev = newNode
       this.head = this.head.prev
       this.size++
     }
     if (!this.head){
       this.head = newNode
       this.tail = newNode
       this.size++
     }
   }
   addtoTail(val){
     var newNode = new Node(val,null,this.tail)
     if(this.tail){
       this.tail.next = newNode
       this.tail = this.tail.next
       this.size++
     } else {
       this.head = newNode(val)
       this.tail = newNode(val)
     }
   }
   removeHead(){
     if(!this.head){
       return null
     } else {
       var val = this.head.data
       this.head = this.head.next
       if(this.head){ 
       this.head.prev = null
       this.size--
       } else {
         this.tail = null
       }
     }
     return val
   }
   removeTail(){
     if (!this.tail){
       return null
     }
     var val = this.tail.data
     this.tail = this.tail.prev
     if(this.tail){
       this.tail.next = null 
       this.size--
     } else {
       this.head = null
     }
     return val
   }
   search(val){
     var currentNode = this.head
     while(currentNode){
       if(currentNode.data === val){
         return currentNode.data
       }
       currentNode= currentNode.next
     }
     return null
   }
   indexOf(val){
     var count = 0;
     var container = [];
     var currentNode = this.head
     while(currentNode){
       if(currentNode.data === val){
         container.push(count)
       }
       currentNode = currentNode.next
       count++
     }
     return container
   }
 }
 
 var cool = new LinkedList()
 cool.addtoHead(1)
 cool.addtoHead(2)
 cool.addtoHead(4)
 cool.addtoTail(3)
 cool.addtoTail(4)
 console.log(cool.indexOf(4))
 console.log(cool)