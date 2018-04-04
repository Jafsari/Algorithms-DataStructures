function reverse(){
    let current = this.head;
    let next = current.next
    let prev = null;
    while (current){
      current.next = prev;
      prev = current;
      current = next;
      if (next !== null){
        next = next.next
      }
    }
    this.head = prev;
  }
