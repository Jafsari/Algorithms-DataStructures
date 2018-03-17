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