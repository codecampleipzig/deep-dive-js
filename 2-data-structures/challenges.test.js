const {spliceChallenge, highScore, sliceSpreadChallenge, entriesStartingWith} = require("./challenges")

describe ("2 Data Structures", () => {
   test("spliceChallenge", () => {
      expect(spliceChallenge()).toEqual(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])
   });
   test("highScore", () => {
      expect(highScore()).toBe(272);
   });
   test("sliceSpreadChallenge", () => {
      expect(sliceSpreadChallenge()).toEqual(["A", "B", "C", "D", "E", "F", "G"]);
   });

   test("entriesStartingWith",() => {
      const testGlossary = ["A1", "A2", "A3", "B1", "B2", "D1", "D2"]
      expect(entriesStartingWith(testGlossary, "A")).toEqual(["A1", "A2", "A3"]);
      expect(entriesStartingWith(testGlossary, "B")).toEqual(["B1", "B2"]);
      expect(entriesStartingWith(testGlossary, "C")).toEqual([]);
      expect(entriesStartingWith(testGlossary, "D")).toEqual(["D1", "D2"]);
   })

   xtest('sortChallenge',() => {
      expect(sortChallenge(['a', true, 0])).toEqual([true, 0, 'a']);
      expect(sortChallenge([true, 0, 'a', 0, 'a', true])).toEqual([true, true, 0, 0, 'a', 'a']);
   })
});
