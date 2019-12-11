// # Function composition
// Key aspect of functional programming
// Instead of creating functions from individual statements, we want to build them up from tiny functions.
// Therefore these tiny functions have to be chained together, so the output of one function becomes the input of the next

// Method chaining, kind of works, but limits us to the methods that are available on the returned object.

// Composing with statements;

const multiplyBy2 = x => x * 2;
const add3 = x => x + 3;
const divideBy5 = x => x / 5;

const initialResult = multiplyBy2(11);
const nextStep = add3(initialResult)
const finalStep = divideBy5(nextStep);

console.log("finalStep", finalStep);

divideBy5(add3(multiplyBy2(11)))

// But risky, lines still potentially rely on all previous lines.

// Better, but unreadable:
const multiplyBy2 = x => x * 2;
const add3 = x => x + 3;
const divideBy5 = x => x / 5;

const result = divideBy5(add3(multiplyBy2(11)));

// We're combinint a function with a value to get a result then combining that result with another function to get another result and so on

// Sounds familiar?


// Reduce as THE most versatile function in programming

const multiplyBy2 = x => x * 2;
const add3 = x => x + 3;
const divideBy5 = x => x / 5;

const reduce = (array, howToCombine, buildingUp) => {
   for (let i = 0; i < array.length; i++) {
      buildingUp = howToCombine(buildingUp, array[i]);
   }
   return buildingUp;
}

const runFunctionOnInput = (input, fn) => {
   return fn(input);
}

const output = reduce([multiplyBy2, add3, divideBy5], runFunctionOnInput, 11);

// The combination of calling reduce with runFunctionOnInput is often called compose or pipe

// Functional Style
pipe(
   multiplyBy2,
   add3,
   divideBy5,
   subtract4
) (11)

// VS Imperative Style
const firstStep = multiplyBy2(11);
const secondStep = add3(firstStep);
const thirdStep = divideBy5(secondStep);
const finalStep = subtract4(thirdStep);
