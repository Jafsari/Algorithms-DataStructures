function oneAway(str,str2){
    if (Math.abs(str.length - str2.length) > 1 ){
      return false
    }
    var obj = {};
    var obj2 = {};
    for(var i = 0; i < str.length ; i++){
      if (obj[str[i]]) {
        obj[str[i]]++
      } else {
        obj[str[i]] = 1;
      }
    }
    for(var j = 0; j < str2.length ; j++){
      if (obj2[str2[j]]) {
        obj2[str2[j]]++
      } else {
        obj2[str2[j]] = 1;
      }
    }
   for (var k = 0; k < str2.length ; k++){
     if (obj[str[k]]){
       obj[str[k]]--
     }
   }
   for (var z = 0; z < str.length ; z++){
     if (obj2[str[z]]){
       obj2[str[z]]--
     }
   }
   var obj1Sum = sum(Object.values(obj))
   var obj2Sum = sum(Object.values(obj2))
    if (obj1Sum <= 1 && obj2Sum <=1){
      return true;
    }
  return false;
  }
  function sum (arr){
    var total = 0;
    for(var i= 0; i < arr.length ; i ++){
      total +=arr[i]
    }
    return total;
  }