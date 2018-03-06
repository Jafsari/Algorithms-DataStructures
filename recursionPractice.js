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