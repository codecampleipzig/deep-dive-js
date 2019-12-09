const {
  createFunction,
  createFunctionPrinter,
  outer,
  expectedOutputLines,
  addByX,
  once,
  after,
  delay,
  russianRoulette,
  average,
  makeHistory,
  blackjack
} = require("./closure-challenges");

describe("3 Functions : Closure", () => {
  xtest("createFunction", () => {
    let mockConsoleLog = jest.fn();
    const originalConsoleLog = console.log;
    console.log = mockConsoleLog;
    createFunction()();
    expect(mockConsoleLog).toBeCalledWith("hello");
    console.log = originalConsoleLog;
  });
  xtest("createFunctionPrinter", () => {
    let mockConsoleLog = jest.fn();
    const originalConsoleLog = console.log;
    console.log = mockConsoleLog;
    createFunctionPrinter("TEST STRING 1")();
    expect(mockConsoleLog).lastCalledWith("TEST STRING 1");
    createFunctionPrinter("TEST STRING 2")();
    expect(mockConsoleLog).lastCalledWith("TEST STRING 2");
    console.log = originalConsoleLog;
  });
  xtest("outer", () => {
    let output = [];
    const originalConsoleLog = console.log;
    console.log = (...inputs) => output.push(inputs.join(" "));
    outer();

    const counterA = outer();
    const counterB = outer();

    counterA();
    counterA();
    counterA();
    counterB();
    counterA();
    expect(output).toEqual(expectedOutputLines);
    console.log(originalConsoleLog);
  });

  xtest("addByX", () => {
    expect(addByX(10)(1)).toBe(11);
    expect(addByX(11)(2)).toBe(13);
    expect(addByX(12)(3)).toBe(15);
  });

  xtest("once", () => {
    const first = once(x => x);
    expect(first(3)).toBe(3);
    expect(first(4)).toBe(3);

    const oncified = once((a, b) => a * b);
    expect(oncified(2, 3)).toBe(6);
    epxect(oncified(4, 6)).toBe(6);
    expect(oncified(900, 510)).toBe(6);
    expect(oncified()).toBe(6);
    epxect(oncified(1, 2, 3, 4)).toBe(6);
  });

  xtest("after", () => {
    let output = 0;
    const called = () => (output = 42);
    const afterCalled = after(3, called);
    afterCalled();
    expect(output).toBe(0);
    afterCalled();
    expect(output).toBe(0);
    afterCalled();
    expect(output).toBe(42);
  });

  xtest("delay", done => {
    let output = 0;
    const delayed = delay((a, b) => (output = a * b), 90);
    expect(output).toBe(0);
    delayed(3, 6);
    expect(output).toBe(0);
    setTimeout(() => {
      expect(output).toBe(3 * 6);
      done();
    }, 100);
  });
  xtest("russianRoulette", () => {
    const play = russianRoulette(3);
    expect(play()).toBe("click");
    expect(play()).toBe("click");
    expect(play()).toBe("bang");
    expect(play()).toBe("reload to play again");
    expect(play()).toBe("reload to play again");
    expect(play()).toBe("reload to play again");
  });

  xtest("average", () => {
    {
      const avgSoFar = average();
      expect(avgSoFar()).toBe(0);
      expect(avgSoFar(4)).toBe(4);
      expect(avgSoFar(8)).toBe(8);
      expect(avgSoFar()).toBe(6);
      expect(avgSoFar(12)).toBe(8);
      expect(avgSoFar()).toBe(8);
    }
    {
      const avgSoFar = average();
      expect(avgSoFar()).toBe(0);
      expect(avgSoFar(4)).toBe(4);
      expect(avgSoFar(8)).toBe(8);
    }
  });

  xtest("makeFuncTester", () => {
    const capLastTestCases = [
      ["hello", "hellO"],
      ["goodbye", "goodbyE"],
      ["howdy", "howdY"]
    ];
    const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
    const capLastAttempt1 = str => str.toUpperCase();
    const capLastAttempt2 = str =>
      str.slice(0, -1) + str.slice(-1).toUpperCase();
    shouldCapitalizeLast(capLastAttempt1).toBe(false);
    shouldCapitalizeLast(capLastAttempt2).toBe(true);
  });

  xtest("makeHistory", () => {
    const myActions = makeHistory(2);
    expect(myActions("jump")).toBe("jump done");
    expect(myActions("undo")).toBe("jump undone");
    expect(myActions("walk")).toBe("walk done");
    expect(myActions("code")).toBe("code done");
    expect(myActions("pose")).toBe("pose done");
    expect(myActions("undo")).toBe("pose undone");
    expect(myActions("undo")).toBe("code undone");
    expect(myActions("undo")).toBe("nothing to undo");
  });

  xtest("blackjack", () => {
    const deal = blackjack([
      2,
      6,
      1,
      7,
      11,
      4,
      6,
      3,
      9,
      8,
      9,
      3,
      10,
      4,
      5,
      3,
      7,
      4,
      9,
      6,
      10,
      11
    ]);

    const i_like_to_live_dangerously = deal(4, 5);
    expect(i_like_to_live_dangerously()).toBe(9);
    expect(i_like_to_live_dangerously()).toBe(11);
    expect(i_like_to_live_dangerously()).toBe(17);
    expect(i_like_to_live_dangerously()).toBe(18);
    expect(i_like_to_live_dangerously()).toBe("bust");
    expect(i_like_to_live_dangerously()).toBe("you are done!");
    expect(i_like_to_live_dangerously()).toBe("you are done!");
  });

  xtest("blackjack BONUS", () => {
    const deal = blackjack([
      2,
      6,
      1,
      7,
      11,
      4,
      6,
      3,
      9,
      8,
      9,
      3,
      10,
      4,
      5,
      3,
      7,
      4,
      9,
      6,
      10,
      11
    ]);

    const i_like_to_live_dangerously = deal(4, 5);
    expect(i_like_to_live_dangerously()).toBe(9);
    expect(i_like_to_live_dangerously()).toBe(11);
    expect(i_like_to_live_dangerously()).toBe(17);
    expect(i_like_to_live_dangerously()).toBe(18);
    expect(i_like_to_live_dangerously()).toBe("bust");
    expect(i_like_to_live_dangerously()).toBe("you are done!");
    expect(i_like_to_live_dangerously()).toBe("you are done!");

    const i_TOO_like_to_live_dangerously = deal(2, 2);
    expect(i_TOO_like_to_live_dangerously()).toBe(4);
    expect(i_TOO_like_to_live_dangerously()).toBe(15);
    expect(i_TOO_like_to_live_dangerously()).toBe(19);
    expect(i_TOO_like_to_live_dangerously()).toBe("bust");
    expect(i_TOO_like_to_live_dangerously()).toBe("you are done!");
    expect(i_TOO_like_to_live_dangerously()).toBe("you are done!");

    const i_ALSO_like_to_live_dangerously = deal(3, 7);
    expect(i_ALSO_like_to_live_dangerously()).toBe(10);
    expect(i_ALSO_like_to_live_dangerously()).toBe(13);
    expect(i_ALSO_like_to_live_dangerously()).toBe("bust");
    expect(i_ALSO_like_to_live_dangerously()).toBe("you are done!");
    expect(i_ALSO_like_to_live_dangerously()).toBe("you are done!");
  });
});
