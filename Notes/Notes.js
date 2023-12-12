/* To clone in GitHub:

visit the repo's main page on GitHub
open the <>Code menu on the right side
choose which method of cloning you need (HTTPS or SSH), and copy the url provided
Once you $ cd into the directory where you want to place your new repo, run the following command: ​

$ git clone <your copied url here> */

/* To fork:

visit the repo's main page on GitHub
click the Fork button in the top right corner to create a fork
visit the repo in your own Github account and follow the same cloning steps above! */

/* the href element refers to the URL of a linked resource. It is typically attached to an a element like so:

<a href="http://google.com">Go To Google</a>*/

/* Structural
Use these tags to create the overall hierarchy of the content in your page:

header
nav
main
section
article
aside
footer
div
*/

/* Based on these definitions, a possible structure of a blog site could look like this:

<div id="blog-articles-about-animals">

  <section>
    <h1>Articles about Turtles</h1>
    <article>
      <h2>Where Turtles Live</h2>
      <p>blah blah</p>
    </article>
    <article>
      <h2>What Turtles Eat</h2>
      <p>blah blah</p>
    </article>
  </section>

  <section>
    <h1>Articles about Chickens</h1>
    <article>
      <h2>History of Chickens in USA</h2>
      <p>blah blah</p>
    </article>
    <article>
      <h2>Chickens in the Wild</h2>
      <p>blah blah</p>
    </article>
  </section>

</div> */

// <script src="../../index.js" async></script> : don't forgot to put async at the end of script to intergrate JS

// Boolean = true or false statement
//external CSS style input: <link rel=”stylesheet” type=”text/css” href=“Path To stylesheet.css” />

/* #green {          ----- #green means to get from id="green"
  background-color: green;
}
.red {               ----- .red means get from class="red"
  width: 200px;
  height: 200px;
  background-color: red;
}
div {
  width: 300px;
  height: 100px;
  background-color: blue;
}

Primative Data Type
boolean: A boolean will always represent either the value true or false
string: A string can represent any series of ordered characters, something like "Hello", "World", or even "How now, brown cow?"
number: A number represents a data value that can typically be used to solve any issue mathematically. Some examples of this would be 0, -347, 17.525
null: Null represents the intentional absence of a value. When you use null, you are intentionally indicating that the data-value has no value.
undefined: Like null, undefined can represent a lack of value, however, unlike null this is usually because the value of the data has not yet been assigned.
integer is not primative.
null v. undefined: null represents an intentional lack of value, while undefined represents the lack of a definition.

Non-Premative: Some examples of Non-Primitive object types would be functions, objects, and arrays */

/*
var integer = 4;
var float = 4.7;
var max = +Infinity;

// some operations with numbers
var sum = 4 + 5; // adding two numbers
var difference = 9 - 4; // subtracting two numbers
var product = 4 * 5; // multiplying two numbers
var quotient = 20 / 4; // dividing two numbers
Not a Number (NaN)
Examine the following code:

console.log(4 + undefined);

Rounding Up and Rounding Down
You can round a number either up or down using the Math.ceil() (up), and the Math.floor() (down) methods:

var original = 33.7;

console.log('rounded up:', Math.ceil(original));
console.log('rounded down:', Math.floor(original));

You can also take a string version of a number, like "4", and get an actual number, like 4 a couple of ways:

Wanting to "parse" an integer, using the Number.parseInt()
Wanting to parse a float (decimal), using Number.parseFloat()

// generate a random number between 1 and 10
var randomBetween1And10 = Math.random() * (10 - 1) + 1;
console.log('randomBetween1And10:', randomBetween1And10);
var min = 90
var max = 100;
var randomBetweenMinAndMax = Math.random() * (max - min) +min;
console.log("randomBetweenMinAndMax:", Math.floor(randomBetweenMinAndMax)); // Math.floor rounds it down to a whole number

Accessing String Character
var name = "Robert Smalls";
var firstCharacter = name[0];
var eighthCharacter = name[7];

console.log('firstCharacter:',firstCharacter); // should log "R"
console.log('eighthCharacter:', eighthCharacter); // should log "S"

Reassignment of string function
function reassignAString(input) {
  // reassign the input string to the described string
  // return the input string
  input = "reassigned"
  return input;
}
var resultString1 = reassignAString('Computer Science');
console.log(resultString1); // logs "reassigned" to the console

var resultString2 = reassignAString('Software Engineering');
console.log('should also be "reassigned":', resultString2); // logs "reassigned" to the console

Template literals are enclosed with backticks `` instead of quotation marks, like the string syntax you are likely used to.
Template literals reduce the complication of multi-line strings. Instead of:
"string text line 1\n" + "string text line 2";
to output a two-lined string, a template literal would simply look like:
`string text line 1
string text line 2`
You can get the length of a string using the .length property (not a method, although vaguely similar in appearance):
var lengthOfName = "Alan Turing".length;
console.log('lengthOfName version 1:', lengthOfName);
to get last letter of the string = .length - 1

You can get a portion of a string using the .substring() method (note -> there are other ways to do this - research the .substr() method):
var subString = "JavaScript".substring(2, 9);
console.log('portion of string from before index 2, up to, but not including, index 9:', subString);
You can determine where in a string you can find a particular substring using the .indexOf() method for string:
If the substring is not found, the call to indexOf() will return -1:

Consider the case of wanting to cast (convert a value) from something other than a string into a string. You can do so by using the .toString() method:
var num = 17;
var stringNum = num.toString();
console.log('stringNum:', stringNum);
console.log('type of stringNum:', typeof stringNum);
var bool = true;
var stringBool = bool.toString();
console.log('stringBool:', stringBool);
console.log('type of stringBool:', typeof stringBool);

Arithmetic Operators: The operators that allow us to code mathematical operations such as +, -, %, *
Comparison Operators: The operators that use === , < or > , !=, <= >=
Assignment Operators: The operators that use =  to assign values or += -=
A falsy value is one that would evaluate to false if treated as a boolean. Falsy are the following values:
false
0
"" (empty string)
null
undefined
NaN (not a number)
The rest outside the list above are evaluated truthy
Logical AND (&&): The logical AND operator is used to evaluate the truthfulness of multiple expressions at once. It returns the falsy value first, if not; will input true
Logical OR (||): The logical OR operator returns the first expression if it is truthy (it can be converted to true). Otherwise, it returns the second expression.

Assigning to properties: (Adding and Updating Object Properties)
const obj = {};
obj.x = 3;
console.log(obj.x); // Prints 3.
console.log(obj); // Prints { x: 3 }.
const key = "y";
obj[key] = 5;
console.log(obj[key]); // Prints 5.
console.log(obj); // Prints { x: 3, y: 5 }.


The use of [] or .(dot) when accessing Objects
var superman = {
  alias: "Superman",
  name: "Clark Kent",
  'location': "Smallville",
  'age in years': 50
}
console.log(superman.name); // => "Clark Kent"
console.log(superman.'location') // => "SyntaxError"
console.log(superman.location) // => "Smallville"
console.log(superman.'age in years'); // => "Error: Unexpected String" - use console.log(superman["age in years"]) as you cannot use superman.age in years
let worstObjectEver = {
  22: 'fish',
  start: 99,
}
// ERROR, Uncaught SyntaxError: unexpected token: numeric literal
console.log( worstObjectEver.22 )
// CORRECT, logs 'fish'
console.log( worstObjectEver[22] )
Variables can only be used in bracket notation:
myKey = 22
// CORRECT, logs 99 - the value of the variable 'start' is used as the key
console.log( worstObjectEver[myKey])


Iterating Objects with For in Loop:
​Iterating over an object is as simple as creating a for...in loop. By default, the for...in loop iterates over every property of an object, giving you access to each key.

Below we get back to the dog object from above, to show you a couple of examples on how to access both the keys and the values of object properties with that special type of loop.

let dog = {name: "Chance", breed: "German Shepherd", weight: 100};

for (var key in dog){
  console.log(key)
}
  /* Expected Output
  => "name"
  => "breed"
  => "weight"

With the above loop we are console logging the keys ("name", "breed", "weight") rather than the values associated with those keys.

Below we are using bracket notation (ex. anObject[key]) to log the property values associated with each key.

for (var key in dog){
console.log(dog[key])
}
    Expected Output:
    => "Chance"
    => "German Shepherd"
    => 100


The in Operator
Many times when working with objects we need to know if a property exists in the object before we can attempt to manipulate that property.

An easy way to do that is by using the JS in operator.

Observe the following example in JSFiddle or your IDE to gain understanding of how this operator behaves:

let dog = {name: "Chance", breed: "German shepherd", weight: 100};

if('age' in dog) console.log("The dog has an age");
else console.log("The dog has NO age");

let key = "breed";

if(key in dog) console.log(`The dog has a ${key}`);
else console.log(`The dog has NO ${key}`);

A nested object is an object that contains objects.

Below you'll see a unitedStates object, which may look strange at first. Take a moment to look over it in depth:

var unitedStates = {
  population : 331900000,
  states : {
    nd : {
      capital: 'Bismark',
      population : 774948,
      largestCity : {
        name: 'Fargo',
        population : 126748
      }
    },
    tx : {
      capital : 'Austin',
      population : 29530000,
      largestCity : {
        name: 'Houston',
        population : 2326000
      }
    }
  }
}
console.log(unitedStates.states.nd.capital); // => 'Bismark'
Adding New Nested Properties
When setting nested properties, you are not able to set nested properties at levels that do not exist yet.

let yard = {};

// ERROR, plants is undefined!
yard.plants.trees = 'fir';

// All good, plants holds a nested object instead of undefined
yard.plants = {};
yard.plants.trees = 'fir';

for (var key in unitedStates) {
  console.log(unitedStates[key]);
}

for (key in unitedStates){
  for (subKey in unitedStates[key]){
    console.log(subKey);
  }
}
  /* Expected Output
  => "nd"
  => "tx"


  for (key in unitedStates){
    for (subKey in unitedStates[key]){
      console.log(unitedStates[key][subKey]);
    }
  }
    /* Expected Output
    => > Object { capital: "Bismark", population: 774948, largestCity: Object { name: "Fargo", population: 126748 } }
    => > Object { capital: "Austin", population: 29530000, largestCity: Object { name: "Houston", population: 2326000 } }

    var unitedStates = {
  population : 331900000,
  states : {
    nd : {
      capital: 'Bismark',
      population : 774948,
      largestCity : {
        name: 'Fargo',
        population : 126748
      }
    },
    tx : {
      capital : 'Austin',
      population : 29530000,
      largestCity : {
        name: 'Houston',
        population : 2326000
      }
    }
  }
}
/*console.log(unitedStates.states.nd.capital); // => 'Bismark'
unitedStates.states.tx.capital = "Austin (BJJ Capital of the World!)"
console.log(unitedStates.states.tx.capital)

Accessing subkeys within subkeys of object:
for (var key in unitedStates) {
  console.log(unitedStates[key]);
}

for (key in unitedStates){
  for (subKey in unitedStates[key]){
    console.log(subKey);
  }
}
  /* Expected Output
  => "nd"
  => "tx"

for (key in unitedStates){
  for (subKey in unitedStates[key]){
    console.log(unitedStates[key][subKey]);
  }
}
  /* Expected Output
  => > Object { capital: "Bismark", population: 774948, largestCity: Object { name: "Fargo", population: 126748 } }
  => > Object { capital: "Austin", population: 29530000, largestCity: Object { name: "Houston", population: 2326000 } }

for(key in unitedStates) {
  for (subKey in unitedStates[key]) {
    console.log(unitedStates[key][subkey])
  }
}
for (key in unitedStates) {
  for (subikey in unitedStates[key][subKey]){
    console.log(unitedStates[key][subKey][subikey])
  }
}
  Expected Output:
  Austin
  29530000
  { name: 'Houston', population: 2326000 }

Every array has a .length property which shows how many elements are in the array. And because we know that indexes run 'one-behind' compared to the element numbers, then we can use simple math to get to the last element's index:

console.log(worldAuthors[ worldAuthors.length - 1 ]);

Arrays
var worldAuthors = ['Edgar Allan Poe', 'Fyodor Dostoevsky', 'J.R.R Tolkien', 'Homer', 'Victor Hugo'];
console.log(worldAuthors.indexOf("Homer")) = 3
console.log(worldAuthors[2]) = J.R.R Tolkien
worldAuthors[0] = 'Miguel de Cervantes' = replaces 'Edgar Allan Poe' at index 0
worldAuthors[7] = "Paulo Coelho"; = ['Miguel de Cervantes', 'Fyodor Dostoevsky', 'J.R.R Tolkien', 'Homer', 'Victor Hugo', empty item x2 , 'Paulo Coelho'] because you added at index 7
worldAuthors.length = 8
console.log(worldAuthors[ worldAuthors.length - 1 ]) = Paulo Coelho which is the last (- 1)

For Loop
The most basic approach to iterate over an array is by using a for loop:

for(let index = 0; index < worldAuthors.length; index++){
        console.log(worldAuthors[index]);
    }
For...of Loop
The for loop works fine, but as you can see it is a bit verbose. Luckily JavaScript offers other loops. One loop statement often used with arrays is the for...of loop:

    for(let element of worldAuthors){
        console.log(element);
    }

Another example:
let array = ['dog', 'cat', 'fish']
for (let element of array) {
    console.log(element)

dog
cat
fish

array.entries()
for(let [index, animal] of array.entries()){
    console.log(index, animal)
}
0 'dog'
1 'cat'
2 'fish'

The push() and pop() methods:
If you need to add an element to the end of an array you can use the method push():
let cities = ["Ottawa"];
cities.push("Bangkok");
console.log(cities); // output: ["Ottawa", "Bangkok"]
Similarly, if you need to remove "Bangkok" from the array you can just use cities.pop() which will automatically remove it, as this method always removes the very last element.

The shift() and unshift() methods
If adding or removing elements needs to happen at the front of the array, you can use unshift() and shift():
let cities = ["Ottawa"];
cities.unshift("Bangkok");
console.log(cities); // output: ["Bangkok", "Ottawa"]
cities.shift();
console.log(cities); // output: ["Ottawa"]

The splice() vs. slice() methods:
The splice() method makes working with arrays much more flexible, as it allows us to add, remove and even replace elements at a specific index.

The splice() method may take many arguments, but the core arguments are three:
myArray.splice(index, deleteCount, element)
-The index is where the changes in the array will start.
-The deleteCount is how many elements will be deleted starting with index.
-The element is the new element(s) that will be added starting at index.

Let's see this at work with some examples:

let cities = ["Ottawa"];
cities.splice(1, 0, "Bangkok");
//cities is now ["Ottawa", "Bangkok"]
cities.splice(1, 1);
//cities is now ["Ottawa"]
cities.splice(0, 1, "Kathmandu", "Bangkok");
//cities is now ["Kathmandu", "Bangkok"]

There is another array method called slice() which could also be useful in extracting array elements, but don't let the similar sounding names fool you - the two methods work in very different ways:
let phone = [0,1,2,3,4,5,6,7,8,9]
phone.slice(0, 3) = [0, 1, 2]

The concat() method
There are times when we do not need to manipulate any of the array elements, but the arrays themselves. One frequently used array method to help with that is the concat() method.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num3);
console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"
console.log(elements.join(''));
// Expected output: "FireAirWater"
console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
console.log(elements.join(" "))
//with space


Nested Arrays
Nested arrays, also called *multidimensional or matrix arrays are arrays that are comprised of other arrays as their elements.
const apartments = [ ["001", "002", "003", "004", "005"], ["101", "102", "103", "104", "105"], ["201", "202", "203", '204', "205"], ["301", "302", "303", "304", "305"] ];

to access specific number:
console.log(apartments[1][2]) = "103"

for(let index = 0; index < apartments.length; index++){
    console.log(apartments[index]);
}
Output:
['001', '002', '003', '004', '005']
['101', '102', '103', '104', '105']
['201', '202', '203', '204', '205']
['301', '302', '303', '304', '305']

for(let floorIndex = 0; floorIndex < apartments.length; floorIndex++){
    for(let aptIndex = 0; aptIndex < apartments[floorIndex].length; aptIndex++){
        apartments[floorIndex][aptIndex] = "A" + apartments[floorIndex][aptIndex];
    }
}
console.log(apartments);
Output:
  [ 'A001', 'A002', 'A003', 'A004', 'A005' ],
  [ 'A101', 'A102', 'A103', 'A104', 'A105' ],
  [ 'A201', 'A202', 'A203', 'A204', 'A205' ],
  [ 'A301', 'A302', 'A303', 'A304', 'A305' ]

Complete the function called "computeAverageOfNumbers".
Given an array of numbers, "computeAverageOfNumbers" returns their average of numbers inside the array.
Notes:

If given an empty array, it should return 0.
To find the average of a list of numbers, add the numbers together and divide by the total amount of numbers
var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3

function computeAverageOfNumbers(nums) {
  // your code here
  let sum = 0;

  // Check if the array is empty
  if (nums.length === 0) {
    return 0;
  }

  // Calculate the sum of numbers
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
// divide for average num
  let average = sum / nums.length;

  return average;
}
var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3

Lexical scope is the concept that variables have limited availability. Conversely some programming languages use dynamic scoping where every variable is always available. In a JavaScript application, every value, variable, expression, etc. that is declared outside of a code block is said to live in the global scope of the application, and therefore is accessible throughout the entire application, in any section of the code, and in any other scope. The most obvious type of local scope is the block scope. Block scope is created by if statements, for loops and other similar statements. A "block" is any chunk of code that is bounded by {} and that block of code only lives within those curly braces. Anything inside curly braces is a block.

Using Spread Operator:
const user = {
  id: 1,
  username: "Eddie",
  admin: true
}

to change input in the user's username, you could use the user.username = 'Eddie 2' to permanently change it.
Using the .assign operator looks like this:
const newUser = Object.assign(
  {}, // this is creating an obj
    user, // where we are pulling the data and changing
      {username: "Eddie 2", admin: false} // what the actual change is
)
console.log(newUser) = { id: 1, username: 'Eddie 2', admin: false }

now using spread operator: ... (three dots)
const newUser = {
  ...user, // ... means spread operator and user is where were getting the info and changes
    username: "Eddie 3",
    id: 3,
    admin: !true
}
console.log(newUser)= { id: 3, username: 'Eddie 3', admin: false }

Adding array using spread operator:

A function addCity takes an array of cities as an input, and outputs a copy of the array with one more city added to it - "Stockholm".
For example, if the value of citiesArray is ["Madrid", "London"], the function should return ["Madrid", "London", "Stockholm"].

const addCity = (citiesArray) => {
  let newCities = [...citiesArray, "Stockholm"]; // ...citiesArray is where were adding "Stockholm"
  return newCities;
}


Deleting object properties:
The standard way to do it is:

delete user.admin = user = {id: 1, username: "Eddie"}

Remove properties using Destructing:
let {id,...newUser} = user // the first part is what section of user you want to delete, second is creating newUser equals to user
console.log(newUser) =  user = {  username: "Eddie", admin: true }

You can make complete or partial deep copies of an array or an object with the spread operator (...):
let dogObject = {
  name: "Yori",
  breed: "Dobermann",
  color: "black"
}
//we assign catObject with a new object {} and place the contents
//of dogObject inside of it with ...dogObject
let catObject = { ...dogObject };
catObject.name = "Pixie";
catObject.breed = "Burmese";
catObject.color = "brown";

Refactor the following function to return a copy of the passed in object, using the spread operator:

const updateAge = (object, age) => {
  object.age = age;
  return object;
};
Answer:
const updateAge = (object, age) => {
    return {...object, age}
}

console.log("This should be a dog: ", dogObject);
In essence the spread operator simply copies only the contents of an array or object.

Add Properties
const clock = {
  hours: 13,
  minutes: 40,
};

const clone = {
  ...clock,
  seconds: 46,
};
// clock => { hours: 13, minutes: 40 }
// clone => { hours: 13, minutes: 40, seconds: 46 }

Change Properties
const clock = {
  hours: 13,
  minutes: 40,
  seconds: 23,
};

const clone = {
  ...clock,
  minutes: 12,
};
// clock => { hours: 13, minutes: 40, seconds: 23 }
// clone => { hours: 13, minutes: 12, seconds: 23 }

Delete Properties
const clock = {
  hours: 13,
  minutes: 40,
  seconds: 23,
};

const { seconds, ...clone } = clock;
// clock => { hours: 13, minutes: 40, seconds: 23 }
// clone => { hours: 13, minutes: 40


Rest Parameters
Note: The ... (rest) syntax is used in the parameters of a function. Take care not to confuse it with the spread operator, as they function differently.
function printAnimals(singleParameter) {
  console.log(singleParameter);
}
printAnimals("dog", "cat", "fish"); = dog


function printAnimals(...mulipleParameters) { // using (rest) ... syntax allows a function to accept an indefinite and/or unknown number of arguments in the form of an array:
  console.log(mulipleParameters);
}
printAnimals("dog", "cat", "fish"); = dog, cat, fish

function printAnimals(...animals) {
  for(let species of animals) console.log(species);
}

printAnimals("dog", "cat", "fish", "birds"); = dog, cat, fish, birds

Destructuring Parameters:
Instead of this:

function (properties) {
  return `Hello ${properties.firstName} ${properties.lastName}`
}
you can write with destructuring:

function ({ firstName, lastName }) {
  return `Hello ${firstName} ${lastName}`
}

in Arrow line:
({ firstName, lastName }) => `Hello ${firstName} ${lastName}`;

Default parameters:
Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
Example
function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5, 3)); // if parameter b is present, default b = 2 will not be activated therefor 5 * 3 = 15
// Expected output: 15

console.log(multiply(5)); // returns 10 because a = 5 * b = 2 since there is no b added = 10
// Expected output: 10

Parameters are still set left-to-right, overwriting default parameters even if there are later parameters without defaults.
function f(x = 1, y) {
  return [x, y];
}
f(); // [1, undefined]
f(2); // [2, undefined]

Higher Order Function
Some of the HOF are: Array.forEach(), Array.map(), Array.filter(), Array.reduce(), Array.find()

ForEach
The forEach method invokes a higher-order function for each element of an array.
var arr = [1, 2, 3, 4];

arr.forEach(function(element) {
  console.log(element);
});
Compare to a for..of loop:
var arr = [1, 2, 3, 4];

for (var element of arr) {
  console.log(element);
};
const items = ["item1", "item2", "item3"];
const copyItems = [];
// before: using a regular for loop
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}
// after using .forEach
items.forEach((item) => {
  copyItems.push(item);
  count++ // shows how many times the function iterated which will equal 3 at this case
});


Map (returns as array)
The map method invokes a function for each element of an array, but allows each element to be transformed and pushed to a new array. In other words, the map method:

Creates a new array that's the same size as the original array.
Applies a function to each element of the original array.
Pushes the return value of the function into the new array.
EXAMPLE
const arr = [1, 2, 3, 4];

const squares = arr.map((element) => {
  return element * element;
});
console.log(squares); // [1, 4, 9, 16]

Compare this with the equivalent syntax of a for..of loop:
const arr = [1, 2, 3, 4];

const squares = [];
for (let element of arr) {
  squares.push(element * element);
}
console.log(squares); // [1, 4, 9, 16]

Filter (returns as array)
The filter method iterates over an existing array and allows us to filter (keep) only the elements from that array which pass a certain logical comparison (condition). The filter method automatically returns an array with only those elements.

let names = ["Bob", "Tom", "Ben", "John", "Ted", "Todd"];

let tNames = names.filter(name => name.charAt(0) == "T");

console.log(tNames); // ["Tom", "Ted", "Todd"]

In summary, the filter method:
Creates a new array that's no larger than the original array.
Applies a function to each element of the original array.
Pushes the element into the new array if the function returns true.
The function passed to the filter method is called a predicate, because its value will be true or false:

const arr = [1, 2, 3, 4];

const odds = arr.filter(element => {
  return element % 2 !== 0;
});

console.log(odds); // [1, 3]

Compare this with the equivalent syntax of a for..of loop:

const arr = [1, 2, 3, 4];

const odds = [];

for (let element of arr) {
  if (num % 2 !== 0) {
    odds.push(element);
  }
}

console.log(odds); // [1, 3]

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

Reduce
EXAMPLE
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0; // this will act as the initial value of whatever we are trying to add
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);
console.log(sumWithInitial);
// Expected output: 10

Chain Array's reduce, map, and filter methods (or at least two of them) to reduce the input array of student data to an average age of the entire class.
const students = [
    { name: "Stephen", age: 24 },
    { name: "Alice", age: 19 },
    { name: "Jordan", age: 29 },
    { name: "Julie", age: 21 },
    { name: "Chris", age: 26 }
]
let filteredAges = students.map((student) => student.age) // Extract ages
.reduce((total, age) => total + age, 0) / students.length
console.log(filteredAges) = 23.8


Using Math.min() // math.min() returns the smallest value number

console.log(Math.min(2, 3, 4));
// Expected output: 2

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// Expected output: 1

DOM Manipulation
For example, if you have an HTML document with a body looking like this:

  <body>
    <div id="myHello" class="myDivs">Hello</div>
    <div id="myGoodbye" class="myDivs">Goodbye</div>
  </body>
you can select the first div element by writing:

document.querySelector('#myHello')
Now, find out what will be the result if you console log document.querySelector('.myDivs') and document.querySelectorAll('.myDivs') for the same HTML code above.

NOTE - to select elements by id we use the symbol # in querySelector, and to select by class we use . - just like we do in our CSS stylesheet.
document.querySelectorAll('.myDivs') = <div id="myHello" class="myDivs">Hello</div>, <div id="myGoodbye" class="myDivs">Goodbye</div>


Types of Events
There are many different types of events. They can be categorized on the basis of where and how they occurred.

Some of the most common ones that you will need to use:
Event	Description
load	the moment when the entire page is loaded, including all dependent resources
focus	when an element receives focus, e.g. when user navigates to an input field
blur	when an element loses focus, for example when user navigates away from an input field
click	when user clicks over an element
change	when user changes the state of an input element, e.g. clicking on a checkbox, or focusing out of a text field
input	when user changes the state of an input field - triggered with every key stroke
keydown	when a key is pressed
keyup	when a key is released
mouseover	when pointing device moves the cursor onto an element or its children
mouseout	when pointing device moves the cursor out of an element or its children
contextmenu	when user opens a context menu, e.g. clicking the right mouse button or pressing context menu key
submit	when a form gets submitted

EXAMPLE of click event
<!-- index.html -->
<button id="button1">Click me!</button>

// index.js
let btn = document.querySelector('#button1');
btn.addEventListener("click", () => alert('Button1 was clicked')) // this will alert when "Click me!" is clicked
 or
 // index.js
let btn = document.querySelector('#button1');
const myClickFunction = () => {
    alert('Button1 was clicked')
}
btn.addEventListener("click", myClickFunction);