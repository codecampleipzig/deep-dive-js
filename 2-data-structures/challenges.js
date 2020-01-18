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
function entriesStartingWith(glossary, startingLetter) {
if ( glossary != null && glossary.length != 0){
   return glossary.filter(word => word.charAt(0) == startingLetter);
} return undefined;


   // let myArray = [];
   // for (let i=0; i < glossary.length; i++){
   //    if (glossary[i].charAt(0) == startingLetter){
   //       myArray.push(glossary[i]);
   //    }
   // }
   // return myArray;
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
function sortChallenge(values) {
   values.sort((a, b) => {
      let typeOfA = typeof a;
      let typeOfB = typeof b;
      if (typeOfA < typeOfB){
         return -1;
      } if (typeOfA > typeOfB){
         return 1;
      } return 0;
   }) 
   return values;
}

   // let sortedArray = []; 
   // for (let i=0; i < values.length; i++){
      //    if (typeof values[i] === 'boolean'){
         //       sortedArray.push(values[i]);
         //    } else if (typeof values[i] === 'number'){
            //       sortedArray.push(values[i]);
            //    } else if (typeof values[i] === 'string'){
               //       sortedArray.push(values[i]);
               //    } 
               //    }

module.exports = {
  spliceChallenge,
  sliceSpreadChallenge,
  highScore,
  sortChallenge,
  entriesStartingWith
};
