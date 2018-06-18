const firstUnique = (str) => {
    let obj = {};
    var count = 0;
    for (let i = 0; i < str.length ; i ++){
      if (obj[str[i]]){
        obj[str[i]]++
      } else {
        obj[str[i]] = 1;
      }
    }
    for(let key in obj){
      if (obj[key] === 1){
        return count
      }
      count++
    }
  }