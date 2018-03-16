function funnyFlatten(arr){
    var container = [];
    arr = arr.toString('')
    var obj = {};
    for (var i = 0; i < arr.length ; i ++){
      if (arr[i] in obj){
        obj[arr[i]]++
      } else {
        obj[arr[i]] = 1;
      }
    }
    
    for (var key in obj){
      if (key !== ','){
        container.push(key)
      }
    }
    for(let j = 0; j < container.length; j++){
      container[j] = +container[j]
      
    }
    return container
    }
    
    funnyFlatten([[2],[[[[[1]]]]],[[3]],[[[[[4]]]]],[[[[[[[[[5]]]]]]]]]])

// recursive flatten
    function flatten(arr) {
        var container = [];
        for(var i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
                container = container.concat(flatten(arr[i]));
            } else {
                container.push(arr[i]);
            }
        }
        return container;
    }
    
    flatten([[1],[[2],[[3]],[4]],5])