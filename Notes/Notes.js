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
