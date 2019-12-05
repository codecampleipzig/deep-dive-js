// Just using splice, manipulate daysInWeek, so it actually contains all the days in the week and in the right order
function spliceChallenge() {
   const daysInWeek = ["Tuesday", "Fizz", "Buzz", "Wednesday", "_", "Friday"]  // don't touch this!
   // Add calls to splice here:
   daysInWeek.splice(0,6,'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'); // Gabe, I'm sorry to tell you this week order is WRONG

   return daysInWeek;
}

// This code doesn't work, but with a tiny tweak it will.
function highScore() {
   const scores = [62, 234, 163, 32, 41, 272];
   return Math.max(...scores); // added '...' before scores
}

// From the glossary (alphabetically sorted list of strings), extract a subsection for a specific starting letter
// e.g. entriesStartingWith(["Adagio", "Andante", "Breve", "Cadenza", "Chorale", "Dolce"], "C") -> ["Cadenza", "Chorale"]
function entriesStartingWith(glossary, startingLetter) { 
   return glossary.filter(word => word.startsWith(startingLetter));
}

// Without touching the array literals, and without adding any new string literals, return this array:
// ["A", "B", "C", "D", "E", "F", "G"]
function sliceSpreadChallenge() {
   const x = ["X", "A", "B", "C", "X"];
   const y = ["E", "F", "G", "X"];
   const z = ["X", "C", "D", "E"];

   return [...x.slice(1,4), ...z.slice(2), ...y.slice(1,3)];
}

// Sort an array of values, by type in this order: First booleans, than numbers, than strings.
// Apart from that, the order is undefined
// sortChallenge(['a', true, 3]) -> [true, 3, 'a']
function sortChallenge(values) {
   values.sort(a, b){
      let sortedArray = [];
      if (typeof a == boolean && typeof b == boolean) {
         return ;
      } else if (typeof a == number && typeof b == boolean) {
         return ;
      
   }
   return sortedArray;
}

// Implement a function equivalent to Array.prototype.find with a loop
// If no element satisfies the condition return undefined
function find(array, predicate) {

}

// Implement lastIndexOf with a loop
function lastIndexOf(array, element) {

}

// Implement includes using indexOf
function includes(array, element) {

}

// Write a function that takes in an array of strings and checks whether each of the strings contain the letter 'A'
function everyContainsA(strings) {

}
// Write a function that takes in an array of strings and checks whether one of the strings contains a number
function someContainsNumber(strings) {

}

// Implement Array.prototype.some with a loop
function some(array, condition) {

}

// Create a function that adds a string ending to each member in an array.
// e.g. addEnding(["clever", "meek", "hurried", "nice"], "ly")
// -> ["cleverly", "meekly", "hurriedly", "nicely"]
function addEnding(array, ending) {

}

// Create a function to remove all null values from an array.
// e.g. removeNull(["a", null, "b", null]) -> ["a", "b"]
function removeNull(array) {

}

// Using reduce in combination with the concat method, write a function to flatten an array of arrays into a single array, that has all the elements of the original orrays
// e.g. flatten([['a', 'b'], ['c', 'd'], ['e']])
// -> ['a', 'b', 'c', 'd', 'e']
function flatten(array) {

}

module.exports = {
   spliceChallenge,
   sliceSpreadChallenge,
   highScore,
   sortChallenge,
   entriesStartingWith,
   find,
   lastIndexOf,
   includes,
   everyContainsA,
   someContainsNumber,
   some,
   addEnding,
   removeNull,
   flatten
};