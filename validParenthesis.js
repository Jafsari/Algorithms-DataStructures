const validParenthesis = (str) => {
    let map = {
      "(": ")",
      "[": "]",
      "{": "}"
      };
      var stack = [];
      for (var i = 0; i < str.length ; i ++){
        if (map[str[i]]){
          stack.push(map[str[i]]);
        } else {
          if (str[i] !== stack.pop()){
            return false;
          }
        }
      }
      return stack.length === 0;
  };
  // validParenthesis('{()}');
  
  const validParenthesisRecursive = (str) => {
    let map = {
      "(":")",
      "{":"}",
      "[":"]"
    };
    let stack = [];
    let count = 0;
    const recurse = (str) => {
      if (count < str.length){
        if (map[str[count]]){
          stack.push(map[str[count]]);
        } else {
          if (str[count] !== stack.pop()){
            return false;
          }
        }
        count++;
        recurse(str);
      }
    };
    recurse(str);
    return stack.length === 0;
  };