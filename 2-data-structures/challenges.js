// Just using splice, manipulate daysInWeek, so it actually contains all the days in the week and in the right order
function spliceChallenge() {
  const daysInWeek = ["Tuesday", "Fizz", "Buzz", "Wednesday", "_", "Friday"]; // don't touch this!
  // Add calls to splice here:
  daysInWeek.splice(0, 0, "Monday");
  daysInWeek.splice(2, 2);
  daysInWeek.splice(3, 1);
  daysInWeek.splice(3, 0, "Thursday");
  daysInWeek.splice(5, 0, "Saturday");
  daysInWeek.splice(6, 0, "Sunday");

  return daysInWeek;
}

// This code doesn't work, but with a tiny tweak it will.
function highScore() {
  const scores = [62, 234, 163, 32, 41, 272];
  return Math.max(...scores);
}

// From the glossary (alphabetically sorted list of strings), extract a subsection for a specific starting letter
// e.g. entriesStartingWith(["Adagio", "Andante", "Breve", "Cadenza", "Chorale", "Dolce"], "C") -> ["Cadenza", "Chorale"]
function entriesStartingWith(glossary, startingLetter) {}
let startingIndex;
let endingIndex;
//    // // Find indexOf First Element startingWith startingLetter

//    // // Find indexOf First Element not startingWith startingLetter AFTER that index

//    // // slice from first to second index;
//    // return glossary.slice(startingIndex, endingIndex);
console.log(glossary);
const [first, ...rest] = glossary;
if (first === undefined) {
   return false;
} else if (first.charAt(0) ==! undefined) { 
   for (let i = 0; i < array.length; i++) {
      if (first.charAt(0) == startingLetter) { 
   return startingIndex = array[i];
   } else if (first.charAt(0)==! startingLetter)
   return endingIndex = array[i];
   }}
console.log(startingIndex, endingIndex)
      // first starts With startingLetter
      // return [first, ...entriesFromBeginningStartingWith(rest, startingLetter)];
//    console.log(entriesStartingWith(rest, startingLetter));
// }
// else {
//    return entriesStartingWith(rest, startingLetter);


entriesStartingWith(["Adagio", "Andante", "Breve", "Cadenza", "Chorale", "Dolce"], "C");

function contains([first, ...rest], element) {
   if (first === undefined) {
      return false;
   }
   else if (first == element) {
      return true;
   }
   else {
      return contains(rest, element);
   }
}

// Without touching the array literals, and without adding any new string literals, return this array:
// ["A", "B", "C", "D", "E", "F", "G"]
function sliceSpreadChallenge() {
  const x = ["X", "A", "B", "C", "X"];
  const y = ["E", "F", "G", "X"];
  const z = ["X", "C", "D", "E"];

  const slicedX = x.slice(1, 4);
  const slicedY = y.slice(1, 3);
  const slicedZ = z.slice(2, 4);

  let mySlicedArray = [...slicedX, ...slicedZ, ...slicedY];

  return mySlicedArray;
}

// Sort an array of values, by type in this order: First booleans, than numbers, than strings.
// Apart from that, the order is undefined
// sortChallenge(['a', true, 3]) -> [true, 3, 'a']
function sortChallenge(values) {}

module.exports = {
  spliceChallenge,
  sliceSpreadChallenge,
  highScore,
  sortChallenge,
  entriesStartingWith
};
