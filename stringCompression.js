function stringCompression(str){
    var count = 1;
    var string = ''
    for(var i = 0; i <str.length ; i++){
      if (str[i] ===str[i+1]){
        count++
      } else {
        string+=str[i] + count
        count = 1;
      }
    }
    return string
    }
    