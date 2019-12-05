// **********************************
// Literals
// **********************************

// Homogenous Array
['Lock', 'Shock', 'Barrel']

// Heterogenous Array
[2, 'B', true];

// Recursive Array
[['O', 'X', ' '],
['O', ' ', 'X'],
['X', 'O', ' ']];

// **********************************
// Accessing the elements
// **********************************

// length is a property

const cast = ['Gordi', 'Chris', 'Vern'];

cast.length;

// Indexing
cast[1];
cast[cast.length]
cast[100]

// Mutability
cast[0] = 'Gordian';

// The elements of an array can be mutated (even if the array is const!!!)
// const only makes sure that the pointer to the array doesn't move.
// The contents of what the pointer is pointing to however are not protected.

// Assigning a value to non-existent index will expand the array.
cast[cast.length] = 'Teddy';
cast[100] = 'Ace';

// **********************************
// # Spread Syntax ...
// **********************************

const aToC = ['A', 'B', 'C'];
const dToF = ['D', 'E', 'F'];

[...aToC, 'D', 'E'];
['B', 'C', ...dToF];

// This can be used for concatenation
[...aToC, ...dToF];

// Can also be done using concat
aToC.concat(dToF);

// and to call functions with an array of arguments
console.log(...aToC);
console.log(aToC);

// or to copy an object
const clone = [...aToC];
clone[0] = "ups";
aToC[0];

// **********************************
// # Slicing
// **********************************

// return a subsection of an array
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

animals.slice(0, animals.length);
animals.slice(0, 3);
animals.slice(2, 4);
animals.slice(2);

// **********************************
// # Destructuring
// **********************************

// Create bindings to elements inside an array
const [first, second, third] = ["a", "b", "c"];

// ... can be used to bind the rest of the array
const [first, second, ...rest] = ["a", "b", "c", "d", "e"];
first;
second;
rest;

// Can also be used to destructure function arguments
function contains([first, ...rest], element) {
   if (first === undefined) {
      return false;
   }
   else if (first == element) {
      return true;
   }
   else {
      return contains(rest, element);
   }
}
