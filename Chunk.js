function chunk(array, size) {
    const container = [];
    for(let i = 0; i < array.length; i += size){
        container.push(array.slice(i, i+size));
     }
     return container;
}
chunk([1,2,3,4,5],2)

function chunkReverse(array, size) {
    const container = [];
    for(let i = 0; i < array.length; i += size){
        container.push(array.slice(i, i+size).reverse());
     }
     return container;
}
chunkReverse([1,2,3,4,5],2)


function chunkRecurse(arr,size){
    var container = [];
    var count = 0;
    var length = arr.length
    var a = arr
    function inner (arr){
      if (count < length){
        container.push(a.slice(count,count+size).reverse());
        count+=size
        inner();
      }
      
    }
    inner(arr);
    return [].concat(...container);
  }