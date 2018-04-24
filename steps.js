const memo = (fn) => {
    const cache = {};
   return function(...args){
     if (cache[args]){
       return cache[args]; // immedietely invoke the argument
     }
     const result = fn.apply(this,args);
     cache[args] = result;
     return result;
   };
  };
  
  const steps = (n) => {
    if (n <= 1){
      return 1;
    } 
     return memoStep(n - 1) + memoStep(n - 2) + memoStep(n - 3);
  };
  const memoStep = memo(steps);
  memoStep(3);