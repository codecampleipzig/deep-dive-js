// Creating a function

// # Possibility 1
// function keyword statement
function multiplyBy2 (input) {
   return input * 2;
}

// Can appear, whereever a statement can be.
// For example also within another function
function main() {
   function multiplyBy2 (input) {
      return input * 2;
   }
}

// # Possibility 2
// function keyword expression
const multiplyBy2 = function (input) {
   return input * 2;
}

// Can also be used as an argument
copyArrayAndManipulate([1, 2, 3], function (input) {return input * 2})

// And can also get a name;
copyArrayAndManipulate([1, 2, 3], function multiplyBy2 (input) {return input * 2})

// # Possibility 3
// arraow function expression
const multiplyBy2 = (input) => {
   return input * 2;
}

// When the body just contains a return statement, we can leave out the {} and the return keyword
const multiplyBy2 = (input) => input * 2;

// And if there's exactly 1 parameter we can even remove the parenthesis
const multiplyBy2 = input => input * 2;

// Note: Arrow functions fit our functional programming goals
// self-contained, only input and output, all on the same line

copyArrayAndManipulate([1, 2, 3], n => n * 2);

// Function Parameters
// Input to our function

// The number of parameters of a function is called its arity

// Unary:
multiplyBy2 = n => n * 2;

// Binary:
multiply = (n, m) => n * m;

// Optional Arguments
// The following code is allowed

multiplyBy2(2, true, "hedgehog") // -> 4

// On the other hand parameters that are not bound to arguments evaluate to undefined
// This can be quite useful:

const minus = (a, b) => {
   if (b === undefined) {
      return -a;
   }
   return a - b;
}

minus(10); // -10
minus(10, 5) // 5;s

// We can also supply default arguments
const slice = (array, start = 0, end = array.length) => {
   const result = [];
   for (let i = start; i < end; i++) {
      result.push(array[i])
   }
   return result;
}

slice([1, 2, 3]);
slice([1, 2, 3], 1);
slice([1, 2, 3], 1, 2);

// Rest parameters
// If you add ... in front of the last parameter it will be bound to an array of all the additional arguments
const fun = (a, b, ...rest) => { return rest; }

fun(1, 2, 3, 4, 5) // [3, 4, 5]
fun(1, 2, 3) // [3]
fun(1, 2) // []

// Example
const push = (array, ...values) => {
   for (const value of values) {
      array.push(value);
   }
}

const array = [1, 2, 3]
push (array, 4, 5, 6);
