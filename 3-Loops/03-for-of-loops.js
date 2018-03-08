
//for in loop pulls the index number
var catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (var cat in catArray){
  console.log(cat, 'says meow');
}

//for of loop pulls out value of those to show the actual cat names
var catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (var cat of catArray){
  console.log(cat, 'says meow');
}
