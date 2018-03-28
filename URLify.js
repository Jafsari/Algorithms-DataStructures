function URLify(str,k){
    var string = ''
    for (var i = 0 ; i < str.length ; i++){
       if (i === k){
        break;
      }
      if (str[i] == 0){
         // coercing is so OP
        string+='%20'
      }
      string += str[i]
    }
    
    return string.split(' ').join('')
    }
    
    URLify('Mr John Smith    ', 13)
    