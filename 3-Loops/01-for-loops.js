// //for statement loops

// /* 
// +=   i += 1 same as i = i + 1
// -=   i -= 1 same as i = i - 1
// *=   i *= 1 same as i = i * 1
// /=   i /= 1 same as i = i / 1
// %=  i = i % 1 */

// for ( var i = 1/*variable/index section*/; i <= 10/*conditional section*/;i++/*increment section*/){
//     console.log("Number:", i);
// }

// //Practice
// for(var i = 0; i <= 50; i+=5){
//     console.log(i);
// }

// for (var i = 20; i > 1; i--){
//     console.log(i);
// }

// //write a for loop that starts at 3, and increments by 5, but doesnt go over 30
// for(var i=3;i<30;i+=5){
//     console.log(i)
// }

// for(var i = 10; i <= 100; i += 2) {
//     console.log(i);
// }

// for (var o = 4; o <= 40000; o *= 10) {
//     console.log(o);
// }

// for (var j = 0; j <= 20; j += 2) {
//     console.log(j);
//}

// var name = 'Kenn';

// for (var i = 0; i < name.length; i++) {
//     console.log(name[i]);  //[] is the index
// }

// var name = 'Peter';

// for (var i = name.length - 1; i >=0; i--) {
//     console.log(name[i]);
// }

// let total = 0

// for (let i = 1; i <=50; i++) {
//     total += i
    // console.log(total);  This log will show the math
// }
//console.log(total); //log is outside of the loop which won't show the numbers

//is it an integer of 15, 5, or 3

//var iDontKnow = ??

for (i=0;i<100;) 
console.log((++i%3?'':'Fizz') + (i%5?'':'Buzz')||i)

function fizzBuzz() {  
    for (var i = 1; i <= 100; i++) {
      if ( i % 3 == 0 && i % 5 == 0 ) {
        console.log('FizzBuzz');
      }
      else if ( i % 3 == 0 ) {
        console.log('Fizz');
      }
      else if ( i % 5 == 0 ) {
        console.log('Buzz');
      }
      else {
        console.log(i);
      }
    }
  }
  fizzBuzz();


