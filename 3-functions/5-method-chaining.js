// Interlude: Methods
// Arrays, objects, functions and strings have access to 'methods'
// 'methods' are functions that they can use on themselves

const array = [1, 2, 3];
array.push(10); // Where's this push method coming from?

// Javascript provides several important higher order functions as array methods

const add = (a, b) => a + b;
reduce([1, 2, 3], add, 0)

//With the Array method this looks like this:
[1, 2, 3].reduce(add, 0);

// The array is inserted into the reduce function automatically as the first input/argument.

// Other array methods:
// map, forEach, filter, flatMap, reduce, reduceRight
// MDN guides us

const array = [1, 2, 3, 4, 5, 6]
const greaterThan2 = num => num > 2;
const filteredArray = array.filter(greaterThan2);

// Method chaining
// Because these methods return a new array, we can call an array method immediately again on the return value

const array = [1, 2, 3, 4, 5, 6];
const greaterThan2 = num => num > 2;
const add = (a, b) => a + b;

const sumOfGreaterThan2 = array.filter(greaterThan2).reduce(add);

// Benefit of array methods:
// Easier to add features: Just modify the callback
// More readable: imagine the for loop version of the example above
// Easier to debug: As long as we understand what's happening under-the-hood