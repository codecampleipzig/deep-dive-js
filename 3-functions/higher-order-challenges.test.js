const {
  addTwo,
  addS,
  map,
  forEach,
  mapWith,
  reduce,
  intersection,
  union,
  objOfMatches,
  multiMap,
  commutative,
  objFilter,
  rating,
  pipe,
  highestFunc
} = require("./higher-order-challenges");

describe("3 Functions : Higher Order Functions", () => {
  xtest("addTwo", () => {
    expect(addTwo(3)).toBe(5);
    expect(addTwo(10)).toBe(12);
  });
  xtest("addS", () => {
    expect(addS("pizza")).toBe("pizzas");
    expect(addS("bagel")).toBe("bagels");
  });
  xtest("map", () => {
    expect(map([1, 2, 3], x => x + 2)).toEqual([3, 4, 5]);
    expect(map(["a", "b", "c"], s => s + "s")).toEqual(["as", "bs", "cs"]);
  });
  xtest("forEach", () => {
    let alphabet = "";
    forEach(["a", "b", "c", "d", "e"], c => (alphabet += c));
    expect(alphabet).toBe("abcde");
  });
  xtest("mapWith", () => {
    expect(mapWith([1, 2, 3], x => x + 2)).toEqual([3, 4, 5]);
    expect(mapWith(["a", "b", "c"], s => s + "s")).toEqual(["as", "bs", "cs"]);
  });
  xtest("reduce", () => {
    expect(reduce([1, 2, 3], (acc, e) => acc + e, 0)).toBe(6);
  });
  xtest("intersection", () => {
    expect(
      intersection([5, 10, 15, 20], [15, 88, 20, 1, 5, 7], [1, 10, 15, 5, 20])
    ).toEqual([5, 15, 20]);
    expect(intersection([5, 10, 15, 20])).toEqual([5, 10, 15, 20]);
  });
  xtest("union", () => {
    expect(union([5, 10, 15], [15, 88, 1, 5, 7], [110, 15, 10, 1, 5])).toEqual([
      5,
      10,
      15,
      88,
      1,
      7,
      110
    ]);
  });
  xtest("objOfMatches", () => {
    expect(
      objOfMatches(
        ["hi", "howdy", "bye", "later", "hello"],
        ["HI", "Howdy", "BYE", "LATER", "hello"],
        str => str.toUpperCase()
      )
    ).toEqual({ hi: "HI", bye: "BYE", later: "LATER" });
  });
  xtest("multiMap", () => {
    expect(
      multiMap(
        ["catfood", "glue", "beer"],
        [
          str => str.toUpperCase(),
          str => str[0].toUpperCase() + str.slice(1).toLowerCase(),
          str => str + str
        ]
      )
    ).toEqual({
      catfood: ["CATFOOD", "Catfood", "catfoodcatfood"],
      glue: ["GLUE", "Glue", "glueglue"],
      beer: ["BEER", "Beer", "beerbeer"]
    });
  });
  xtest("commutative", () => {
    const multBy3 = n => n * 3;
    const divBy4 = n => n / 4;
    const subtract5 = n => n - 5;
    expect(commutative(multBy3, divBy4, 11)).toBe(true);
    expect(commutative(multBy3, subtract5, 10)).toBe(false);
    expect(commutative(divBy4, subtract5, 48)).toBe(false);
  });
  xtest("objFilter", () => {
    const startingObj = {};
    startingObj[6] = 3;
    startingObj[2] = 1;
    startingObj[12] = 4;
    const half = n => n / 2;
    expect(objFilter(startingObj, half)).toEqual({ 2: 1, 6: 3 });
  });
  xtest("rating", () => {
    const isEven = n => n % 2 === 0;
    const greaterThanFour = n => n > 4;
    const isSquare = n => Math.sqrt(n) % 1 === 0;
    const hasSix = n => n.toString().includes("6");
    const checks = [isEven, greaterThanFour, isSquare, hasSix];
    expect(rating(checks, 64)).toBe(100);
    expect(rating(checks, 66)).toBe(75);
  });
  xtest("pipe", () => {
    const capitalize = str => str.toUpperCase();
    const addLowerCase = str => str + str.toLowerCase();
    const repeat = str => str + str;
    const capAddlowRepeat = [capitalize, addLowerCase, repeat];
    expect(pipe(capAddlowRepeat, "cat")).toBe("CATcatCATcat");
  });
  xtest("highestFunc", () => {
    const groupOfFuncs = {};
    groupOfFuncs.double = n => n * 2;
    groupOfFuncs.addTen = n => n + 10;
    groupOfFuncs.inverse = n => n * -1;
    expect(highestFunc(groupOfFuncs, 5)).toBe("addTen");
    expect(highestFunc(groupOfFuncs, 11)).toBe("double");
    expect(highestFunc(groupOfFuncs, -20)).toBe("inverse");
  });
});
