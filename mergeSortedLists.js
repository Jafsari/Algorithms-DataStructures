const mergeLists = (list1,list2) => {
    let arr = [list1.head.data,list2.head.data];
    let current = list1.head
    let current2= list2.head
    while (current.next){
    current = current.next
    arr.push(current.data)
    }
    while (current2.next){
    current2 = current2.next
    arr.push(current2.data)
    }
    arr = arr.sort((a,b) => {
      return a -b;
    })
    let list3 = new LinkedList();
    for (let i = arr.length -1; i >= 0 ; i --){
        list3.insertFirst(arr[i])
      }
      return list3
    }
    
    mergeLists(LL,LL2)