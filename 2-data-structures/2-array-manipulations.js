// **********************************
// # push & pop
// **********************************

// push appends elements to the end of an array.
const array = [];
array.push('A');
array.push('B');
array.push('C');

// pop removes and returns the last element of the array
let C = array.pop();
let B = array.pop();
let A = array.pop();

// **********************************
// # shift & unshift
// **********************************

// shift adds elements to the beginning of an array
array.shift('C');
array.shift('B');
array.shift('A');

// unshift removes and returns the first element of the array
A = array.unshift();
B = array.unshift();
C = array.unshift();

// **********************************
// # splice
// **********************************

// **splice** is the most general method for array manipulations.
// It combines element removal and insertion at a specified index.

// first argument is the index where the mutation will take place
// second argument is the number of items to remove at the index
// The remaining arguments are elements to insert at the given index

const months = ['Jan', 'March', 'April', 'May'];

// Insertion
months.splice(1, 0, 'February')

// Replacement
const [Jan] = months.splice(0, 1, 'January')
// Splice returns the removed elements as an Array

// Adding elements to the end
months.splice(5, 0, 'June', 'July', 'August');

// Removing Elements ()
const [January, February, March] = months.splice(0, 3);

// **********************************
// # sorting
// **********************************

// Sorting data is an extremely important operation, but you should not implement sort yourself

const numbers = [4, 6, 3, 1, 5, 2];

numbers.sort();

// You can give the sort method a custom comparator

const strings = ["Berta", "anton", "Delta", "cesar"];

strings.sort((a, b) => {
   const aLowerCase = a.toLowerCase(); // ignore upper and lowercase
   const bLowerCase = b.toLowerCase(); // ignore upper and lowercase
   if (aLowerCase < bLowerCase) {
     return -1; // has to return something < 0 
   }
   if (aLowerCase > bLowerCase) {
     return 1; // has to return something > 0
   }
   // a and b are equal
   return 0;
})
