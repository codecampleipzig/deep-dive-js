// Just using splice, manipulate daysInWeek, so it actually contains all the days in the week and in the right order
function spliceChallenge() {
   const daysInWeek = ["Tuesday", "Fizz", "Buzz", "Wednesday", "_", "Friday"]  // don't touch this!
   // Add calls to splice here:
   daysInWeek.splice(0, 0, 'Monday');
   daysInWeek.splice(2, 2);
   daysInWeek.splice(3, 1, 'Thursday');
   daysInWeek.splice(5, 0, 'Saturday');
   daysInWeek.splice(6, 0, 'Sunday');
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
   return glossary.filter(letter => letter[0] == startingLetter)
}

// Without touching the array literals, and without adding any new string literals, return this array:
// ["A", "B", "C", "D", "E", "F", "G"]
function sliceSpreadChallenge() {
   const x = ["X", "A", "B", "C", "X"];
   const y = ["E", "F", "G", "X"];
   const z = ["X", "C", "D", "E"];

   return [...x.slice(1, 4), ...z.slice(2), ...y.slice(1, 3)]
}

// This is a hard one:
// Sort an array of values, by type in this order: First booleans, than numbers, than strings.
// Apart from that, the order is undefined
// sortChallenge(['a', true, 3]) -> [true, 3, 'a']
function sortChallenge(values) {
   return values.sort((a, b) => {
      const typeOfA = typeof a;
      const typeOfB = typeof b;

      if (typeOfA == typeOfB) {
         return 0
      }
      if (typeOfA == "boolean") {
         return -1;
      }
      if (typeOfA == "string") {
         return 1;
      }
      if (typeOfA == "number") {
         if (typeOfB == "boolean") {
            return 1;
         }
         if (typeOfB == "string") {
            return -1;
         }
      }
   })
}

// Implement a function equivalent to Array.prototype.find with a loop
// If no element satisfies the condition return undefined
function find(array, predicate) {
   for (const element of array) {
      if (predicate(element)) {
         return element
      }
   }
   return undefined
}

// Implement lastIndexOf with a loop
function lastIndexOf(array, element) {
   for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] == element) {
         return i
      }
   }
   return -1
}

// Implement includes using indexOf
function includes(array, element) {
   return array.indexOf(element) != -1
}

// Write a function that takes in an array of strings and checks whether each of the strings contain the letter 'A'
function everyContainsA(strings) {
   return strings.every(word => word.includes("A"))
}

// A bit hard, except if you use a regex.
// Write a function that takes in an array of strings and checks whether one of the strings contains a number
function someContainsNumber(strings) {
   return strings.find(number => number.includes("0") || number.includes("1") || number.includes("2") || number.includes("3") || number.includes("4") || number.includes("5") || number.includes("6") || number.includes("7") || number.includes("8") || number.includes("9"))
}

// Implement Array.prototype.some with a loop
function some(array, condition) {
   for (const element of array) {
      if (condition(element)) {
         return true
      }
   }
   return false
}

// Create a function that adds a string ending to each member in an array.
// e.g. addEnding(["clever", "meek", "hurried", "nice"], "ly")
// -> ["cleverly", "meekly", "hurriedly", "nicely"]
function addEnding(array, ending) {
   return array.map(element => (element + ending))
}

// Create a function to remove all null values from an array.
// e.g. removeNull(["a", null, "b", null]) -> ["a", "b"]

function removeNull(array) {
   const result = [];
   return array.filter(element => {
      if (element !== null) {
         return result.push(element)
      }
   })
}


// Using reduce in combination with the concat method, write a function to flatten an array of arrays into a single array, that has all the elements of the original orrays
// e.g. flatten([['a', 'b'], ['c', 'd'], ['e']])
// -> ['a', 'b', 'c', 'd', 'e']
function flatten(array) {
   if (array.length != 0) {
      return array.reduce((result, element) => result.concat(element))
   } else {
      return array
   }
}


// Add destructuring to the parameter list to make this function return user.email
function getEmail(user) {
   const {email} = user;
   return email;
}

// Use destructuring and the spread syntax: return the user object, but with the email swapped out for newEmail
function resetEmail(user, newEmail) {
   return {...user,
      email: newEmail
   }
}

// Object iteration: check that all keys in the object are truthy
// allValuesAreTruthy({a: 1, b: 2}) -> true
// allValuesAreTruthy({a: 1, b: 0}) -> false
// allValuesAreTruthy({a: 1, b: ""}) -> false

function allValuesAreTruthy(object) {
   const objectValues = Object.values(object)
   return objectValues.every(value => Boolean(value)) 
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
