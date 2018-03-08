var weather = 65;

if (weather <=70) {

    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary!');
}

var name = 'Peter';

if (name == 'Peter') {
    console.log('Hello, my name is ' + name + '.');
} else {
    console.log('Hello, what is your name?')
}

var name = 'peter';

var age = 17;
    if(age >=18){
        console.log("you can vote");
    }else{
        console.log("you can't vote");
    }

if (name[0] == name[0].toUpperCase()){
    console.log(name);
} else {
    console.log(name[0].toUpperCase() + name.slice(1));
}

//Else If Statements - go highest number to lowest number

var age = 11;

if (age >= 25) {
    console.log("You an rent a car!")
}
else if (age >= 21) {
    console.log("You can drink!")
}
else if (age >= 18) {
    console.log("You can vote!");
}
else if (age <= 17) {
    console.log("Sorry, you're too young to do anything.");
}

var x = true;
if (typeof x === 'string') {
    console.log('string cheese')
}
else if (typeof x === 'number'){
    console.log('numbers are cool')
}
else if (typeof x === 'boolean'){
    console.log('truthiness')
}

var elevatorUp = true;
var elevatorDown = false;
var elevatorBroken = false;
var elevatorStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if (elevatorUp === true) {    //Note: You don't have to have the ===
    console.log("Going up");
} else {
    console.log("Going down");
}  

if (elevatorBroken) {    //Note: You don't have to have the ===
    console.log("Bummer. Let's take the stairs.");
} else {
    console.log("Which floor?");
}  
//Write another one for stuck:
if (elevatorStuckWhileWeAreOnIt){
    console.log("Oh no! We're stuck!");
} else {
    console.log("This elevator is fast.");
}

//But maybe we're standing there waiting?
if(elevatorBroken && elevatorDown){
    console.log("I hope this thing doesn't start flying down!");
} else {
    console.log("How long are you in town for?");
}

if(elevatorBroken || elevatorStuckWhileWeAreOnIt){
    console.log("Hi Bob, this is Bob with maintenance. How can I help?");
}

//Using ints and other types
if(elevatorNumber === 13 && elevatorStuckWhileWeAreOnIt){
    console.log("This is not our lucky day!");
}

var bankAccount = 5600;
var debt = 4200;
var difference = (bankAccount - debt);

console.log("I have $" + bankAccount + " in my bank account, and I am $" + debt + " in debt.");

if (bankAccount - debt > 700) {
        console.log("I have some extra money. I should pay off my debt. I'll have $" + difference + " leftover.");    
    } else {
        console.log("It probably isn't a good time to pay off my debt.");
}

