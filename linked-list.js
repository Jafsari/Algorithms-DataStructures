// --- Directions
// Implement classes Node and Linked Lists

class Node {
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null; // Make the head to always be null
    }
    insertFirst(data){
        const node = new Node(data,this.head) // Create an instance of the node, add the data to the first parameter, and add 
        // the head to be the second parameter, because insertFirst want's the next parameter to be the head.
        this.head = node // Assign the head to be the new node that was just added.
    }
    size(){
        let counter = 0; // create a counter
        let node = this.head; // assign node to equal this.head
        while(node){ // while the head is true or doesnt equal null
            counter++; // increment
            node = node.next; // iterate through the linked list by assigning the head to the next node
        }
        return counter;
    }
    getFirst(){
        return this.head
    }
    getLast(){
        if (!this.head){ // if linked list is empty return null
            return null;
        }
        let node = this.head; // assign a variable node to equal this.head
        while (node){ // while the node/head is true
            if (!node.next){ // if the node.next isn't true though
                return node // THEN WE GOT THA RASCAL
            }
            node= node.next // iterating through the linked list
        }
       }
    clear(){
        this.head = null; // The reason this works is because, once the head is null, the linked list has no idea there are other values
        // out there

    }
    removeFirst(){
       if (!this.head){
           return;
       }
       this.head = this.head.next
}
    removeLast(){
        if (!this.head){ // If head is null return nothing
            return;
        }
        if (!this.head.next){ // if their's only one element and head.next = null, then get rid of the head node
            this.head = null;
            return;
        }
        let previous = this.head; // Previous variable to help when iterating
        let node = this.head.next; // Checker to see if the next element is null or not
        while(node.next){ // As long as whats in front of node isn't null
            previous = node; 
            node = node.next 
        }
        previous.next = null // Once we figure out that node is at the tail, assign previous.next to null
            }
    insertLast(data){
        const last = this.getLast() // grabbing the getLast method
        if (last){ // if there are nodes inside of the link list
            last.next = new Node(data) // create a new node to become next of the current last node
        } else { // if the linked list is empty
            this.head = new Node(data) // create a node with the data that was given
        }
    }
    getAt(index) {
        let counter = 0; // create a counter
        let node = this.head; // create a variable for node to equal this.head
        while (node) { // while node does not equal null
          if (counter === index) { // if the counter equals the index passed in
            return node;
          } // else
    
          counter++; // increment the count
          node = node.next; //iterate through the list
        }
        return null; //if index is greater than the list's size, lets just return null
      }
    removeAt(index) {
        if (!this.head) { //if the head is null
          return;
        }
    
        if (index === 0) { // for the edge case, if we want to remove the first node
          this.head = this.head.next; // We will assign the new head to be the head.next
          return;
        }
    
        const previous = this.getAt(index - 1); // Reuse the getAt method, to get the previous node before the index were looking for
        if (!previous || !previous.next) { // if the index is too big, that previous is null, or if previous.next is null
          return;
        }
        previous.next = previous.next.next; // Make the previous or current node's next to equal the one after the node we want to
        //remove
      }
      insertAt(data, index) {
        if (!this.head) { // If the head is null, lets just insert a new node
          this.head = new Node(data);
          return;
        }
    
        if (index === 0) { // if we have to insert at index 0, lets create a new node for this.head,
            // and make the current this.head equal to this.next
          this.head = new Node(data, this.head);
          return;
        }
    
        const previous = this.getAt(index - 1) || this.getLast(); // To satisfy the edge case,
        // if the first condition if false, then use this.getLast
        const node = new Node(data, previous.next); // create a new node, where the current previous.next is the next for it
        previous.next = node; // now assign the new previous.next to be the node that was added
    }
}
    