const rotation = (arr,n) => {
    var l = arr.length;
    var result = arr.slice(l - n).concat(arr.slice(0,l-n)).join(" ");
    console.log(result);
  };
  rotation([1,2,3,4,5],2);