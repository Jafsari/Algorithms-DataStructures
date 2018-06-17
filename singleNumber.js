const singleNumber = (arr) => {
    let obj = {};
    for( var i = 0; i < arr.length ; i++) {
      if (obj[arr[i]]){
        obj[arr[i]]++
      } else {
        obj[arr[i]] = 1;
      }
    }
    for (var key in obj){
      if (obj[key] === 1){
        return  + key
      }
    }
  }
  
  singleNumber([4,1,2,1,2])