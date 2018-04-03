function loop(base,expo){
    let count = 0;
    let result = [];
    while ( count < expo) {
      count++
      result.push(base)
    }
    return result.reduce((a,b) => {
      return a * b
    })
  }
  
  function recurse(base,expo){
    if (expo === 1) {
      return base;
    }
    return base * recurse(base,expo-1)
  }
  
  function reverseArrloop(arr){
    return arr.reverse()
  }
  
  function reverseArr(arr){
    let result = [];
    function help(){
      if (arr.length > 0){
        result.push(arr.pop())
        help()
      }
    }
    help()
    return result;
  }
  
  function reverseString(str){
      return str.split('').reverse().join('')
  }
  
  function reverseString(str){
   let result = "";
   let count = str.length
   function help(){
     if (str.length > 0){
       count--
       result += str[str.length-1]
       str = str.slice(0,count)
       help()
     }
   }
   help()
   return result
  }
  
  reverseString('justin')

  //[1,2,3],3 === [3,6,9]
function recursiveMultiplier(arr,num){
    let result = [];
    function help(){
      if (arr.length > 0){
        result.push(arr.shift() * num)
        help()
      }
    }
    help()
    return result
  }
  
  recursiveMultiplier([1,2,3],4)

  function multiply(arr){
    var copy = arr.slice()
    var result =[];
    function help(){
      if(arr.length > 0){
        result.push(arr.shift() * 2)
        help();
      }
    }
  help();
  return "" + result === "" + copy.map((element) => {
    return element * 2
  })
  }
  
  function find(arr,k){
    var count = 0;
    function help(){
      if (arr[count] !== k){
        count++
        help();
      }
    }
    help();
    return count;
  }
  
  find([10,9,8,7,6,5,4,3,2,1],7)
  
  function range(x,y){
    var count = x;
    var result = [];
    function help(){
      if(x < y-1){
        count++
        x++
        result.push(count)
        help();
      }
    }
    help();
    return result
  }
  range(2, 9)
  
  
  function count(str){
    var obj = {};
    var count = 0;
    function help(){
      if (count < str.length){
        if(str[count] in obj){
          obj[str[count]]++
          count++
        } else {
          obj[str[count]] = 1;
          count++
        }
        help();
      }
    }
    help();
    return obj;
  }
  count('thisisgoingtowork')

  function find(obj,val){
    var arr = [];
    function findBob(obj){
        for (var key in obj){
          if (obj[key] === val){
            return true
          } else{ 
            if (typeof obj[key] === 'object'){
              return findBob(obj[key])
            }
          }
        }
      }
      findBob(obj)
      return findBob(obj)
    }
    find(obj,"cool")
  
  