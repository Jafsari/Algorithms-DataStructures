function bubbleSort(arr){
    let barrier = arr.length
    while( barrier >= 0){
      for (let i = 0; i < arr.length ; i ++){
        if(arr[i] > arr[i+1]){
          [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        }
      }
      barrier--
    }
    return arr
  }
  
  //[1,40,12,35,7,18,2,0] == [0,1,2,7,12,18,35,40]
  
  function selectionSort(arr){
    for( let i = 0; i < arr.length; i ++){
      let minIndex = i
      for(var j = i + 1; j < arr.length ; j ++){
        if (arr[j] < arr[minIndex]){
         minIndex = j
        }
      }
      if (minIndex !== i){
      [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]]
      }
    }
    return arr
  }
  selectionSort([1,40,12,35,7,18,2,0])