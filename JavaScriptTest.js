
/*function hello(){
  return "hello world!";
}
var myResult = hello();
// Run the function 'hello'
// Store the return value of the function ("hello world"), to the variable 'myResult'
console.log(myResult)

let age = 25
let name = "Eddie"
function NameAge(param1, param2) {
  return `${param1} is this old: ${param2}`
}
console.log(NameAge(name, age))

function Plus (param) {
  return "Eddie is this old: " + param
}

console.log(Plus(age)) */


/* let RoundThis = 812030.231
console.log("round up:", Math.ceil(RoundThis))
console.log("round down:", Math.floor(RoundThis))
// generate a random number between 1 and 10
var randomBetween1And10 = Math.random() * (10 - 1) + 1;
console.log('randomBetween1And10:', randomBetween1And10);
var min = 90
var max = 100;
var randomBetweenMinAndMax = Math.random() * (max - min) +min;
console.log("randomBetweenMinAndMax:", Math.floor(randomBetweenMinAndMax)); */

/* let testString = 'words';

var firstCharacter = testString[0]; // accesses the first character: 'w'
var thirdCharacter = testString[2]; // accesses the third character: 'r'
console.log(firstCharacter); // will log 'w'
console.log(thirdCharacter); // will log 'r'

var hasBeenDelivered = true;
var blah = false;
function test () {
  if(blah === hasBeenDelivered) {
    return "the same";
  } else if (blah || hasBeenDelivered === true) {
  return "one of them is true"
} else {
  return "none match"
}
}
console.log(test())

const greetingSender = (name, day) => {
  let greet = `Happy ${day}, ${name}!`
  return greet;
};
name = "Eddie"
let day = "Wednesday"
console.log(greetingSender(name, day)) */

//let number1 = 11;
//let number2 = 10;

/*do {
  console.log("No other loop would execute this");
} while (number1 > number2) {
  number1 +=1
  console.log(number1)
}


var myObject = {
  exists: true,
  name: "Galvanize",
  year: 2023,
  languages: ["JavaScript", "HTML", "CSS"],
  myFunc: function(){
      console.log("Object Literals are Awesome!")
    },
  nested: {
      where: "I am an Object inside of an Object"
    }
}
// accessing all propeties
for (var key in myObject) {
  console.log(myObject)
}
//accessing all values of that property
for (var key in myObject) {
  console.log(myObject[key])
}


var yourObject = {
  type: 'object'
}

console.log(myObject.languages[2])
console.log(yourObject.type)


let dog = {name: "Chance", breed: "German Shepherd", weight: 100};

for (var key in dog){
  console.log(key)
}
  /* Expected Output
  => "name"
  => "breed"
  => "weight"

  for (var key in dog){
    console.log(dog[key])
  }
    /* Expected Output
    => "Chance"
    => "German Shepherd"
    => 100
    */


