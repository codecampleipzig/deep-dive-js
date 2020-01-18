// Pure functions

// Remember our goal: Every line of code should be self contained and only rely on its input coming from the line above and its only consequence should be the output used in the line below

let num = 10;

const add3 = x => {
   num++;
   return x + 3;
}

add3(7);

// Examples:

const push = (array, element) => {
   array.push(element);
   return array;
}

const append = (array, element) => {
   return [...array, element];
}

const array = [1, 2, 3];

const result = array.map(mulitplyBy2);
const newResult = array.map(multiplyBy2);

// Or consider

const array = [1, 2, 3];

array.push(4);
array.push(5);
array.push(6);

const result = array.map(multiplyBy2);