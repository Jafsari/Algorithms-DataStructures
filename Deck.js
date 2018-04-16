class Card{
    constructor(number,suit){
      this.number = number;
      this.suit = suit;
      this.value = this.number + this.suit
    }
  }
  
  class Deck{
    constructor(){
      this.deck = [];
      this.newDeck();
    }
    newDeck(){
      var suit = ['Diamonds','Spades','Hearts','Clover'];
      var numbers = ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K'];
      for (var i = 0; i < suit.length ; i ++){
        for (var j = 0; j < numbers.length ; j++){
          this.deck.push(new Card(numbers[j],suit[i]));
        }
      }
    }
    clear(){
      while (this.deck.length){
        this.deck.pop();
      }
    }
    draw(){
     return this.deck.pop();
    }
    shuffle(){
      this.deck.sort(() => Math.random() > 0.5 ? 1 : -1); 
    }
    
  }
  
  var deck = new Deck();
  deck.clear();
  deck.newDeck();
  console.log(deck)