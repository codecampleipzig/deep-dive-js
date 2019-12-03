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
   return glossary.filter(x => x[0] == startingLetter)

}

// Without touching the array literals, and without adding any new string literals, return this array:
// ["A", "B", "C", "D", "E", "F", "G"]
function sliceSpreadChallenge() {
   const x = ["X", "A", "B", "C", "X"];
   const y = ["E", "F", "G", "X"];
   const z = ["X", "C", "D", "E"];
   const a = [...x, ...z, ...y];
   a.splice(0, 1);
   a.splice(3, 3);
   a.splice(4, 1);
   a.splice(7, 1);
   return a;
}

// Sort an array of values, by type in this order: First booleans, than numbers, than strings.
// Apart from that, the order is undefined
// sortChallenge(['a', true, 3]) -> [true, 3, 'a']
function sortChallenge(values) {
   values.sort((a, b) => {
      const typeOfA = typeof a;
      const typeofB = typeof b;
      if (typeOfA < typeofB) {
         return -1;
      };
      if (typeOfA > typeofB) {
         return 1;
      }
      return 0;
   })
   return values;
}
sortChallenge(['a', true, 3])

module.exports = {
   spliceChallenge,
   sliceSpreadChallenge,
   highScore,
   sortChallenge,
   entriesStartingWith,
};