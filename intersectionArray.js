const intersection =(arr1,arr2) => {
    let obj = {};
    let arr = []
    for (let i = 0; i < arr1.length ; i++){
      if (obj[arr1[i]]){
        obj[arr1[i]]++
      } else {
        obj[arr1[i]] = 1;
      }
    }
    for ( let j = 0; j < arr2.length; j ++){
      if (obj[arr2[j]]){
        arr.push(arr2[j])
        obj[arr[j]]--
      }
    }
    return arr
  }
  intersection([1, 2, 2, 1],[2, 2])