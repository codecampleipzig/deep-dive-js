// Challenge 1
// Create a function that accepts one argument and adds 2 to it.
const addTwo = (num) => {
   return num + 2;
};

// Challenge 2
// Create a function that accepts one input and adds an 's' to it
const addS = (word) => {
   return word + "s";
};

// Challenge 3
// Create a function called *map* that takes two inputs:
// 1. an array of numbers
// 2. a 'callback' funciton - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
// map([1, 2, 3, 4, 5], addTwo); // -> [3, 4, 5, 6, 7]
const map = (array, callback) => {
   const result = [];
   for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i]));
   }
   return result
};

// Challenge 4
// The function forEach takes an array and a callback, and runs the callback on each element of the array.
// for Each does not return anything
// ```
// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, char => alphabet += char);
// alphabet; // -> 'abcd'
const forEach = (array, callback) => {
   for ( let i = 0; i < array.length; i++) {
      callback(array[i]);
   }
};

// Challenge 5
// For this challenge you're going to rebuild map as mapWith.
// This time you're going to use forEach inside of mapWith instead of using a for loop.
// map and mapWith should have exactly the same observable behaviour
const mapWith = (array, callback) => {
   const result = [];
   forEach(array, x => result.push(callback(x)));
   return result
};


// Challenge 6
// Reimplement reduce. If you are unsure how reduce should behave, here's a short explanation:
// The function reduce takes an array and reduces the elements to a single value.
// For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
// ```
// const nums = [4, 1, 3];
// const add = (a, b) => a + b;
// reduce(nums, add, 0) // -> 8
// Here is how it works. The function has an 'accumulator value' which starts as the initialValue and accumulates the output for each loop.
// The array is iterated over passing the accumulator and the next array element as arguments to the callback.
// The callback's return value becomes the new accumulator value.
// The next loop executes then with this new accumulator value.
// This continues until all elements in the array have been passed to the accumulator
const reduce = (array, callback, initialValue) => {
   for  (let i = 0; i < array.length; i++) {
      initialValue = callback(initialValue, array[i])
   }
   return initialValue;
};

// Challenge 7
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs.
// Be aware that the arrays are given as separate arguments to the function, not as a combined array
// Bonus: Use reduce!
// intersection([5, 10, 15, 20], [15, 18, 1, 5, 7], [1, 10, 15, 5, 20]) -> [5, 15]
const intersection = (...arrays) => {
   return arrays.reduce((a, b) => a.filter( n =>  b.includes(n) ));
   // return reduce(arrays, (a, b) => a.filter( n =>  b.includes(n) ) , arrays[0])
};


// Challenge 8
// Construct a function union that compares input arrays and returns a new array that contains all elements. If there are cuplicate elements, only add it once to teh new array.
// Preserver the order of the elements starting from the first element of the first input array.
// You may assume, that there are no duplicates within each input array.
// Bonus: Use reduce!
const union = (...arrays) => {
   const array = [...arrays];
   const compareArray = (a, b) => {
      for (element of b) {
         if (!a.includes(element)) {
            a.push(element)
         }
      }
      return a;
   }
   return reduce(array, compareArray, array[0]);
}

// Challenge 9
// Construct a function objOfMatches that accepts two arrays and a callback.
// objOfMatches will build an object and return it.
// To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array.
// If there is a match, the element from the first array becomes a key in an object, and the element fromt the second array becomes the corresponding value.
// objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy, "BYE", 'LATER', 'hello'], str => str.toUpperCase())
// -> { hi: 'HI', bye: 'BYE', later: 'LATER'}
const objOfMatches = (array1, array2, callback) => {
   const object = new Object;
   for ( let i = 0; i < array1.length; i++) {
      if ( array2[i] == callback(array1[i])) {
         object[array1[i]] = array2[i];
      }
   }
   return object
}

// objOfMatches(
//    ["hi", "howdy", "bye", "later", "hello"],
//    ["HI", "Howdy", "BYE", "LATER", "hello"],
//    str => str.toUpperCase()
//  )

// Challenge 10
// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks.
// multiMap will return an object whose keys match the elements in the array of values.
// The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
// Example:
// multiMap(['catfood', 'glue', 'beer'], [s => s.toUpperCase(), s => s[0].toUpperCase() + s.slice(1), s => s + s])
// -> {
//    catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
//    glue: ['GLUE', 'Glue', 'glueglue'],
//    beer: ['BEER', 'Beer', 'beerbeer']
// }
const multiMap = (arrayOfValues, arrayOfCallbacks) => {

}

// Challenge 11
// Create a function commutative that accepts two callbacks and a value
// commutative will return a boolean indicating if passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same result with the order of the functions reversed (passing the value into the second function and then passing the output into the first function).
// Example:
// const multiplyBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtact5 = n => n - 5;
// commutative(multiplyBy3, divBy4, 11) -> true
// commutative(multiplyBy3, subtract5, 10) -> false
// commutative(divBy4, subtract5, 48) -> false
const commutative = (func1, func2, value) => {

}

// Challenge 12
// Create a function objFilter that accepts an object and a callback.
// objFilter should make a new object and then iterate through the passed-in object, using each key as input for the callback.
// If the output from the callback is equal to the corresponding value, then tath key-value pair is copied into the new object.
// objFilter will return this new object.
// Example:
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// objFilter(startingObj, half) -> {6: 3, 2: 1}
const objFilter = (obj, callback) => {

}

// Challenge 13
// Create a function rating that accepts an array (of functions) and a value.
// All the functions in the array will eturn true or fales.
// Rating should return the percentage of functions from the array that return true wen the value is used as input
// Example:
// const isEven = n => n % 2 == 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 == 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// rating(checks, 64); -> 100
// rating(checks, 66); -> 75
const rating = (arrayOfFunctions, value) => {

}

// Challenge 14
// Create a function pipe that accepts an array (of functions) and a value. pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. pipe should return the final output.
// Example:
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'
const pipe = (arrayOfFunctions, value) => {

}

// Challenge 15
// Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value).
// highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, when the subject is given as input.
// Example
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'
const highestFunc = (objOfFuncs, subject) => {

}

module.exports = {
   addTwo,
   addS,
   map,
   forEach,
   mapWith,
   reduce,
   intersection,
   union,
   objOfMatches,
   multiMap,
   commutative,
   objFilter,
   rating,
   pipe,
   highestFunc
}