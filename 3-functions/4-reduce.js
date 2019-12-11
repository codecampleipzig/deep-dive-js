// Reduce and Reducers

// The most verstaile higher order function of all
// But: Takes a mental shift to look at problems through the reduce lens

// We've already seen 'reduction' in action

const map = (array, instructions) => {
   const output = [];
   for (let i = 0; i < array.length; i++) {
      output.push(instructions(array[i]));
      // output = [...output, callback(array[i])];
   }
   return output;
}

const multiplyBy2 = input => input * 2;
const result = map([1, 2, 3], multiplyBy2);



// In every iteration we reduce an array with a new element
// i = 0: [], multiplyBy2(1) -> [2]
// i = 1: [2], multiplyBy2(2) -> [2, 4]
// i = 2: [2, 4], multiplyBy2(3) -> [2, 4, 6]

// There are many more ways of reducing two values
// * Adding two numbers
// * Concatenating two strings or two arrays
// * Given two numbers, choose the larger one

// Reduce implementation

const reduce = (array, howToCombine, buildingUp) => {
   for (let i = 0; i < array.length; i++) {
      buildingUp = howToCombine(buildingUp, array[i]);
   }
   return buildingUp;
}

const add = (a, b) => a + b;

const summed = reduce([1, 2, 3], add, 0);

// buildingUp: accumulator
// howToCombine: reducer

// Examples

const maximum = reduce([12, 16, 24], (a, b) => a > b ? a : b, 0);
const flattened = reduce([[1, 2, 3], [4, 5, 6]], (array1, array2) => [...array1, ...array2], [])

// If no initial value is given, the first value of the array is used and the loop starts at i = 1

// Actual implementation:
const reduce = (array, reducer, initialValue) => {
   if (array.length == 0) {
      if (initialValue === undefined) {
         throw new Error ('Reduce of empty array with no initial value');
      }
      return initialValue;
   }

   let accumulator = initialValue === undefined ? array[0] : reducer (initialValue, array[0]);

   for (let i = 1; i < array.length; i++) {
      accumulator = reducer (accumulator, array[i]);
   }
   return accumulator;
}