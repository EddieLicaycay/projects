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




