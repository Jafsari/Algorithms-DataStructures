function steps(n){
    for (let row = 0; row < n ; row++){
      let stair = ''
      
      for(let column = 0; column < n ; column++){
        if (column <= row){
          stair+= '#'
        } else {
          stair += ' '
        }
      }
      console.log(stair)
    }
  }
  
  
  
  
  function steps(n,row = 0,stair = ''){
  if (n === row){
      return;
    }
  if (n === stair.length){
    console.log(stair)
    return steps(n,row+1)
  }
  if (stair.length <= row){
    stair+= '#'
  } else {
    stair += ' ';
  }
  steps(n,row,stair)
  }
  
  steps(4)



  function pyramid(n){
    let middle = Math.floor((n * 2 - 1) / 2)
    for (let row = 0; row < n ; row++){
      let pyramid = ''
        for(let column = 0; column < 2 * n - 1 ; column++){
          if (middle - row <= column && middle + row >= column){
            pyramid += '#'
          } else {
            pyramid += ' '
          }
        }
         console.log(pyramid)
    }
  }
  
  function pyramid(n, row = 0, level = '') {
    if (row === n) {
      return;
    }
  
    if (level.length === 2 * n - 1) {
      console.log(level);
      return pyramid(n, row + 1);
    }
  
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
      add = '#';
    } else {
      add = ' ';
    }
    pyramid(n, row, level + add);
  }
  pyramid(3)
  

  function fib(n){
    const result = [0,1]
    for(let i = 2; i <= n; i ++){
      const a = result[i - 1];
      const b = result[i -2 ];
      
      result.push(a +b)
    }
    return result[n]
  }
  
  fib(6)
  
  function fib(n){
    if (n < 2){
      return n;
    }
    return fib(n-1) + fib(n-2)
  }
  
  function memoize(fn){
    const cache = {};
    return function(...args){
      if (cache[args]){
        return cache[args];
      }
      const result = fn.apply(this,args);
      cache[args] = result;
      return result;
    }
  }
  fib = memoize(fib);
  fib(100)
  