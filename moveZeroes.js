const moveZeroes = (arr) => {
    let slow = 0;
    let fast = 1;
    while (fast < arr.length){
      if (arr[slow] === 0 && arr[fast] > 0){
        [arr[slow],arr[fast]] = [arr[fast],arr[slow]]
      }
      if (arr[fast] === 0){
        fast++
      }
      if (arr[slow] > 0){
        slow++
      }
    }
    return arr
  }
  
  moveZeroes([0,1,0,3,12])