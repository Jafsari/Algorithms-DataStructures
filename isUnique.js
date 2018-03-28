function isUnique(str){
    var obj = {};
    
    for(var i = 0; i < str.length ; i ++){
      if (obj[str[i]]){
        return false
      } else {
        obj[str[i]] = 1;
      }
    }
    return true
  }
  
  isUnique('hello')