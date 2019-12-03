// **********************************
// # Barebones iteration
// **********************************

const array = ["A", "B", "C", "D"]

// Traditional for loop
for (let i = 0; i < array.length; ++i) {
   const element = array[i];
   // do something with element, e.g.
   console.log (element);
}

// New style: for of
for (element of array) {
   // do something with element, e.g.
   console.log (element);
}

// Functional style
array.forEach((element) => {
   // do something with element, e.g.
   console.log (element);
})
// Note: early exit via break; is not possible

// **********************************
// # Linear Search
// **********************************

// indexOf
// lastIndexOf
// includes
// find

// **********************************
// # Predicates
// **********************************

// every
// some

// **********************************
// # Data Transformations
// **********************************
// filter
// map
// reduce

// **********************************
// # String Array
// **********************************

// Create a string from an array
const ingredients = ["chicken", "potatoes", "carrots", "peas", "onions"];
const shoppingList = ingredients.join("\n");