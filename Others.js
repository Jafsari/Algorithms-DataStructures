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


const user1 = {
  name: 'Jordan',
  age: 28,
};
 
const user2 = {
  name: 'Jordan',
  age: 28,
};
 
console.log(user1 == user2);
console.log(JSON.stringify(user1) === JSON.stringify(user2));


var string1 = 'Tampa';
var string2 = string1;
string1 = 'Venice';
 
console.log(string2);
 
 
////////////////////////////////
 
 
var person1 = {
  name: 'Alex',
  age: 30
};
 
var person2 = person1;
 
person2.name = 'Kyle';
 
console.log(person1);


const data1 = 'Jordan Smith';
 
const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});
 
// only use 'read-only' methods: filter, forEach, map, some, every, etc.
// cannot use: push, pop, splice, shift, reverse, etc.
 
console.log(data2);



const a = {};
const b = { name: 'b' };
const c = { name: 'c' };
 
a[b] = 200;
// a['[object Object]'] = 200
 
a[c] = 400;
// a['[object Object]'] = 400
 
console.log(a[b]);
// console.log(a['[object Object]']);



var x = 10;
 
function y() {
    function x() {}
    x = 100;
    return;
    // function x() {}
}
 
y();
 
console.log(x);


const account1 = {
  name: 'Jen',
  totalAmount: 5000,
  deductAmount: function(amount) {
    this.totalAmount -= amount;
    return 'Amount in account: ' + this.totalAmount;
  },
};
 
const account2 = {
  name: 'James',
  totalAmount: 8000,
};
 
const withdrawFromAccount = function(amount) {
  return account1.deductAmount.bind(account2, amount);
};
 
console.log(withdrawFromAccount(500)());
console.log(withdrawFromAccount(200)());



function fizzBuzz(n){
  for( let i = 1; i < n ; i ++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz")
    } else if (i%3 === 0){
      console.log('buzz')
    } else if(i%5 === 0) {
      console.log('fizz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(100)