// A simple Javascript Execution

const num = 3;
const multiplyBy2 = (inputNumber) => {
   const result = inputNumber * 2;
   return result;
}
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);



// copyArrayAndMultiplyBy2
const copyArrayAndMultiplyBy2 = (array) => {
   const output = [];
   for (let i = 0; i < array.length; i++) {
      output.push(array[i] * 2);
   }
   return output;
}
const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);



// copyArrayAndDivideBy2
const copyArrayAndDivideBy2 = (array) => {
   const output = [];
   for (let i = 0; i < array.length; i++) {
      output.push(array[i] / 2);
   }
   return output;
}
const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);



// copyArrayAndAdd3
const copyArrayAndAdd3 = (array) => {
   const output = [];
   for (let i = 0; i < array.length; i++) {
      output.push(array[i] + 3);
   }
   return output;
}
const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);


// We are breaking DRY!
// What can we do?


// We generalize our function so that we can pass in our specific instruction only when we run the copy Array and Manipulate function!

const copyArrayAndManipulate = (array, instructions) => {
   const output = [];
   for (let i = 0; i < array.length; i++) {
      output.push(instructions(array[i]));
   }
   return output;
}

const multiplyBy2 = (input) => {
   return input * 2;
}

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);


// Why is this possible?

// Because functions in Javascript are values!
// 1. They can be assigned to variables and properties of objects
// 2. They can be passed as arguments into functions
// 3. They can be returned as values from functions.
// We say: Functions in javascript are first class objects.



// Definition: Higher-order function
// Function whith akes in a function or passes out a function
// Just a term to describe these functions: there's nothing inherently different about them.