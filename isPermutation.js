function isPermutation(str,str2){
    var obj = {};
    for(var i =0; i < str.length ; i ++){
      if (obj[str[i]]){
        obj[str[i]]++
      } else {
        obj[str[i]] = 1;
      }
    }
    
    for (var j = 0; j < str2.length ; j ++){
      if (obj[str2[j]]){
        obj[str2[j]]--
      } else {
        return false
      }
    }
    return true
  }