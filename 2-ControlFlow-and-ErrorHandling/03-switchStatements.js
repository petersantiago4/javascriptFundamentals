var friend = "";

switch (friend) {
  case "Fred":
    console.log("Hey Fred, let's go golfing.");
    break;
  case "Karl":
    console.log("Let's hang.");
    break;
  case "John":
    console.log("Sorry, I'm busy right now.");
    break;
  default:
    console.log("Hey " + friend + "can I call you back in a minute.");
} 

var dessertMenu = 'cake';

switch (dessertMenu) {
    case 'pie':
      console.log('Pie, pie, me oh my!');
      break;
    case 'cake':
      console.log('Cake is great!');
      break;
    case 'ice cream':
      console.log('I scream for ice cream!')
      break;
    default:
      console.log('Not on the menu');
}

var x = {};

switch (typeof x) {
  case 'string':
  console.log('string cheese')
  break;
  case 'number':
  console.log('numbers are cool')
  break;
  case 'boolean':
  console.log('truthiness')
  break;
  case 'object':
  console.log('object');
  break;
  default:
  console.log('Everything else')
}



