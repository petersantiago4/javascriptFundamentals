var x = 6;

//(x > 0) ? 'yay' : 'nay'
    //the if   the else or else if

var yay = (x == 0) ? "hello" : (x < 0) ? "hi" : "goodbye";
  console.log(yay); 

var x = 22;
                                             //: acts as a break
var age = (x >= 25) ? "Yay! You can rent a car!" : (x >= 21) ? "Yay! You can drink!" : (x >= 18) ? "Yay! You can vote!" : "Sorry, your too young to do anything fun."
console.log(age);

//this is much for efficient than if/else if/else statement
// ternary has to have a default to run
var x = 3
var type = (typeof x === 'string') ? "String Cheese" : (typeof x === 'number') ? "Numbers are cool" : (typeof x === 'boolean') ? "Truthiness" : "Nothing fun."
console.log(type);