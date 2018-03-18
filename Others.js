function tripleAdd(num1){
    return function(num2){
      return function(num3){
        return num1 + num2 + num3
      }
    }
  }
  
  tripleAdd(10)(20)(30)

  

  function quadrupleAdd(num1) {
    return function(num2) {
      return function(num3, num4) {
        return num1 + num2 + num3 + num4;
      };
    };
  }
   
  quadrupleAdd(10)(20)(30, 40);

  (function hello(){
    return 'Hello World'
  })();

  (function multiply(num1,num2){
    return num1 * num2
  })(10,10);

  function createButtons() {
    for (var i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;
      (function(num) {
        button.onclick = function() {
           alert('This is button ' + num);
        }
      })(i);
      body.appendChild(button);
    }
 }
  
 createButtons();




 function getTotal() {
  console.log(multiplier);
  console.log(total);
  
  let total = 0;
  
  for(var i = 0; i < 10; i++) {
    
    let valueToAdd = i;
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }
  
  return total;
}
 
getTotal();
 
 
 
 
function getTotal() {
  let total;
  var multiplier;
  
  total = 0;
  
  for(var i = 0; i < 10; i++) {
    let valueToAdd;
    
    valueToAdd = i;
    multiplier = 2;
    total += valueToAdd * multiplier;
  }
  
  return total;
}
 
getTotal();



function getProduct(num1){
  return function(num2){
   return  num1 * num2
  }
}
getProduct(10)(10)


const myJsonObj = {
  "myString": "hello there",
 " myNumber": 123,
  "myNull": null,
  "myBoolean": false,
  // myUndefined: [undefined],
  "myArray": [30,40,'apple'],
  // myFunction: [some function],
 " myObject": {
    'name':'Justin'
  }
};


const counter = {
  cnt: 0,
  inc: function() {
this.cnt++;
        alert(this.cnt);         
  }
};
const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', counter.inc.bind(counter));



this.distance = 10000;
const roadTrip1 = {
  distance: 3000,
  getDistance: function(unit, caption) {
    return this.distance + unit + caption;
  }
};
 
const roadTrip2 = {
  distance: 5000
};
 
const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km');
 
getTripDistance(' in total');