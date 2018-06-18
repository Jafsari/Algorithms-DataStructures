const missingNumber = (arr) => {
    let array = [];
    arr = arr.sort(function(a,b){
      return a -b
    });
    for ( let i = 0; i < arr.length ; i ++){
      if (arr[i] + 1 !== arr[i+1] && arr[i+1] !== undefined){
        array.push(arr[i] + 1)
      }
    }
  return array
  }