const {
   spliceChallenge,
   highScore, 
   sliceSpreadChallenge, 
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
} = require("./challenges")

describe ("2 Data Structures", () => {
   xtest("spliceChallenge", () => {
      expect(spliceChallenge()).toEqual(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])
   });
   xtest("highScore", () => {
      expect(highScore()).toBe(272);
   });
   xtest("sliceSpreadChallenge", () => {
      expect(sliceSpreadChallenge()).toEqual(["A", "B", "C", "D", "E", "F", "G"]);
   });

   xtest("entriesStartingWith",() => {
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

   xtest('find', () => {
      expect(find([1, 2, 3], x => x == 2)).toBe(2);
      expect(find([1, 2, 3], x => null)).toBe(undefined);
      expect(find([1, 2, 3], x => x > 2)).toBe(3);
   })
   xtest('lastIndexOf', () => {
      expect(lastIndexOf([3, 3, 3], 3)).toBe(2);
      expect(lastIndexOf([3, 3, 3, 1, 1], 3)).toBe(2);
      expect(lastIndexOf([3, 3, 3, 1, 1], 2)).toBe(-1);
   })
   xtest('includes', () => {
      expect(includes([1, 2, 3, 4, 5], 4)).toBeTruthy();
      expect(includes([1, 2, 3, 4, 5], 6)).toBeFalsy();
      expect(includes([1, 2, 3, 4, 5], "3")).toBeTruthy();
   })
   xtest('everyContainsA', () => {
      expect(everyContainsA([])).toBeTruthy();
      expect(everyContainsA(["BA"])).toBeTruthy();
      expect(everyContainsA(["A", "BA", "CDA"])).toBeTruthy();
      expect(everyContainsA(["A", "BA", "CDA", ""])).toBeFalsy();
   })

   xtest('someContainsNumber', () => {
      expect(someContainsNumber([])).toBeFalsy();
      expect(someContainsNumber(["AAA", "AAA", "A0A"])).toBeTruthy();
      expect(someContainsNumber(["AAA", "A1AA", "AA"])).toBeTruthy();
      expect(someContainsNumber(["AAA", "A2AA", "AA"])).toBeTruthy();
      expect(someContainsNumber(["AAA", "A8AA", "AA"])).toBeTruthy();
      expect(someContainsNumber(["AAA", "A9AA", "AA"])).toBeTruthy();
      expect(someContainsNumber(["AAA", "AAA", "AA"])).toBeFalsy();
   })

   xtest('some', () => {
      expect(some(['A', 'B', 'C'], v => v === 'C')).toBeTruthy();
      expect(some(['A', 'B', 'C'], v => false)).toBeFalsy();
   })

   xtest('addEnding', () => {
      expect(addEnding(["clever", "meek", "hurried", "nice"], "ly"))
      .toEqual(["cleverly", "meekly", "hurriedly", "nicely"]);
      expect(addEnding(["new", "pander", "scoop"], "er"))
      .toEqual(["newer", "panderer", "scooper"])
   });

   xtest('removeNull', () => {
      expect(removeNull([])).toEqual([]);
      expect(removeNull(['A', 'B', 'C'])).toEqual(['A', 'B', 'C']);
      expect(removeNull([null, 'A', null, 'B', null, 'C', null])).toEqual(['A', 'B', 'C']);
      expect(removeNull([null, null, false, "", 0])).toEqual([false, "", 0]);
   })

   xtest('flatten', () => {
      expect(flatten([])).toEqual([]);
      expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
      expect(flatten([[1, 2], [], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
   })
});
