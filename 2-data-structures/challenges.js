// Just using splice, manipulate daysInWeek, so it actually contains all the days in the week and in the right order
function spliceChallenge() {
   const daysInWeek = ["Tuesday", "Fizz", "Buzz", "Wednesday", "_", "Friday"]  // don't touch this!
   // Add calls to splice here:
   daysInWeek.splice(1, 2);
   daysInWeek.splice(2, 1, "Thursday");
   daysInWeek.splice(0, 0, "Monday");
   daysInWeek.splice(5, 0, "Saturday", "Sunday");
   return daysInWeek;
}

// This code doesn't work, but with a tiny tweak it will.
function highScore() {
   const scores = [62, 234, 163, 32, 41, 272];
   return Math.max(...scores);
}

// From the glossary (alphabetically sorted list of strings), extract a subsection for a specific starting letter
// e.g. entriesStartingWith(["Adagio", "Andante", "Breve", "Cadenza", "Chorale", "Dolce"], "C") -> ["Cadenza", "Chorale"]
function entriesStartingWith(glossary, startingLetter) { 
   return glossary.filter(s => s.startsWith(startingLetter));
}

// Without touching the array literals, and without adding any new string literals, return this array:
// ["A", "B", "C", "D", "E", "F", "G"]
function sliceSpreadChallenge() {
   const x = ["X", "A", "B", "C", "X"];
   const y = ["E", "F", "G", "X"];
   const z = ["X", "C", "D", "E"];
   return [...x.slice(1, 3), ...z.slice(1, 3), ...y.slice(0, 3)]
}

// This is a hard one:
// Sort an array of values, by type in this order: First booleans, than numbers, than strings.
// Apart from that, the order is undefined
// sortChallenge(['a', true, 3]) -> [true, 3, 'a']
function sortChallenge(values) {
   values.sort((lhs, rhs) => {
      if (typeof lhs == "boolean") {
         if (typeof rhs == "boolean") {
            return 0
         }
         else {
            return -1;
         }
      }
      if (typeof lhs == "number") {
         if (typeof rhs == "boolean") {
            return 1;
         }
         if (typeof rhs == "number") {
            return 0;
         }
         else {
            return -1;
         }
      }
      if (typeof lhs == "string") {
         if (typeof rhs == "string") {
            return 0;
         }
         else {
            return 1;
         }
      }
   })
   return values;
}

// Implement a function equivalent to Array.prototype.find with a loop
// If no element satisfies the condition return undefined
function find(array, predicate) {
   for (element of array) {
      if (predicate (element)) {
         return element;
      }
   }
   return undefined;
}

// Implement lastIndexOf with a loop
function lastIndexOf(array, element) {
   for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] === element)
         return i;
   }
   return -1;
}

// Implement includes using indexOf
function includes(array, element) {
   return array.indexOf(element) != -1;
}

// Write a function that takes in an array of strings and checks whether each of the strings contain the letter 'A'
function everyContainsA(strings) {
   return strings.every(s => s.includes('A'))
}

// A bit hard, except if you use a regex.
// Write a function that takes in an array of strings and checks whether one of the strings contains a number
function someContainsNumber(strings) {
   function containsNumber(string) {
      for (let i = 0; i < string.length; ++i) {
         if ("0123456789".includes(string.charAt(i))) {
            return true;
         }
      }
      return false;
   }
   // REGEX version
   return strings.some(containsNumber);
}

// Implement Array.prototype.some with a loop
function some(array, condition) {
   for (element of array) {
      if (condition(element)) {
         return true;
      }
   }
   return false;
}

// Create a function that adds a string ending to each member in an array.
// e.g. addEnding(["clever", "meek", "hurried", "nice"], "ly")
// -> ["cleverly", "meekly", "hurriedly", "nicely"]
function addEnding(array, ending) {
   return array.map (s => s + ending);
}

// Create a function to remove all null values from an array.
// e.g. removeNull(["a", null, "b", null]) -> ["a", "b"]
function removeNull(array) {
   return array.filter(e => e !== null);
}

// Using reduce in combination with the concat method, write a function to flatten an array of arrays into a single array, that has all the elements of the original orrays
// e.g. flatten([['a', 'b'], ['c', 'd'], ['e']])
// -> ['a', 'b', 'c', 'd', 'e']
function flatten(array) {
   return array.reduce((result, element) => {
      return [...result, ...element];
   }, [])
}

// Add destructuring to the parameter list to make this function return user.email
function getEmail(user) {
   return email;
}

// Use destructuring and the spread syntax: return the user object, but with the email swapped out for newEmail
function resetEmail(user, newEmail) {
   return {}
}

// Object iteration: check that all keys in the object are truthy
// allValuesAreTruthy({a: 1, b: 2}) -> true
// allValuesAreTruthy({a: 1, b: 0}) -> false
// allValuesAreTruthy({a: 1, b: ""}) -> false
function allValuesAreTruthy(object) {
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
   flatten,
   getEmail,
   resetEmail,
   allValuesAreTruthy
};