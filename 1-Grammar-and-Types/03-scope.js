//Global scope
/*var x = 12
{
    //local scope
    var y = 12;
}

var o = 19

let oldHouse = "Dudley"
{
let one = 1
console.log(one);
}
console.log(o, oldHouse);*/


// everything inside the curly braces is within the function
function football() {
    //local scope
    var x = 7;
    console.log(x);
}
//global scope
football();
//console.log(x); //this wont function since it's trying to call a local scope variably
var x = 10;
console.log(x);
//runs the football function up top and then run it again below


