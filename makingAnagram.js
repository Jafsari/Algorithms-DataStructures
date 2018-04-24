const makingAnagram = (a,b) => {
    let obj = {};
    let count = 0;
    let container = {};
    for (let i = 0; i < a.length ; i++){
      if (obj[a[i]]){
        obj[a[i]]++;
      } else {
        obj[a[i]] = 1;
      }
    }
    for (let j = 0; j <b.length ; j++){
      if (container[b[j]]){
        container[b[j]]++;
      } else {
        container[b[j]] = 1;
      }
    }
    for (let key in container){
      if (key in obj){
        count+= Math.abs(container[key] - obj[key]);
   
      } else {
        count+=container[key]*2;
        
      }
    }
    return count;
  };
  makingAnagram('cde','abc');