function mergeSort(arr){
    if (arr.length === 1){
      return arr;
    }
    const middle = Math.floor(arr.length / 2); // find the middle of the array thats given
    //split the array into two halves
    const left = arr.slice(0,middle)
    const right = arr.slice(middle)
    //recursively keep splitting the array, until it hits the base case
    //when the length is equal to 1 on both left and right when recursively going through whichever side , merge will sort them into the results array
    //once both completed sides are sorted, they will finally go into one last step
    // into sorting both sides with the merge function
    return merge(mergeSort(left),mergeSort(right))
    
    function merge(left,right){
      const results = [];
        while(left.length && right.length){
          if(left[0] > right[0]){
            results.push(right.shift())
          } else {
            if (left[0] < right[0]){
              results.push(left.shift())
            }
          }
        }
        return [...results,...left,...right] // No matter which array is not empty, this will
        // add all the remaining numbers into the new array
    }
  }
  
  
  mergeSort([1,40,12,35,7,18,2,0])