const majorityElement = (arr) => {
    let obj = {};
   for( var i = 0; i < arr.length ; i++) {
     if (obj[arr[i]]){
       obj[arr[i]]++
     } else {
       obj[arr[i]] = 1;
     }
   }
   for (var key in obj){
     if (obj[key] > arr.length/2){
       return + key
     }
   }
 }
 majorityElement([2,2,1,1,1,2,2])