// Partial Application and Currying

// Function composition is powerful, but every function needs to behave the same way
// What if I have a function I want to use that expects two inputs
// Arity Mismatch!!!
// We need to 'decorate' our function to prefill one of its inputs

const multiply = (a, b) = a * b;

const prefillFunction = (fn, prefilledValue) => {
   const inner = (liveInput) => {
      const output = fn(liveInput, prefilledValue);
      return output;
   }
   return inner;
}

const multiplyBy2 = prefillFunction(multiply, 2);
const result = multiplyBy2(5);

// In practice we might have to prefill one, two or even more arguments at different times
// We can convert any function to a function that will accept arguments one by one and only run the function in full once it has all the arguments
// This is called currying and is a more general version of partial application

// Functional Awesomeness

const pipe = (...functions) => {
   return input => functions.reduce((intermediate, f) => f (intermediate), input);
}

const curry = (f, numArgs) => {
   if (numArgs == 1) {
      return input => f(input);
   }
   else {
      return input => curry((...rest) => f(input, ...rest), numArgs - 1);
   }
}

const curriedMultiply = curry((a, b) => a * b, 2);

curriedMultiply(2)(4);
