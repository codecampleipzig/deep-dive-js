// Closure

// Most esoteric concept in Javascript
// In a nutshell: Functions have the ability to carry state



// Reminding ourselves of how functions work:

const multiplyBy2 = inputNumber => inputNumber * 2;

const output = multiplyBy2(7);
const newOutput = multiplyBy2(3);

// No memory of the previous execution.
// Imagine if we could give our functions permanent memory






// It begins with returning a function from a function.

const functionCreator = () => {
   let counter = 0;
   const add3 = (num) => {
      const result = num + 3;
      return result;
   }
   return add3;
}

const generatedFunc = functionCreator();
const output = generatedFunc(2);







// Calling a function inside the function call in which it was defined

const outer = () => {
   let counter = 0;
   const incrementCounter = () => {
      counter++;
   }
   incrementCounter();
}
outer();
// What determines what data our function has acces to?
// Where we call it?





// But what if we call our function outside of where it was defined?

const outer = () => {
   let counter = 0;
   const incrementCounter = () => {
      counter++;
   }
}
outer();
incrementCounter();

// Does this work?



// There is a way to run a function outside where it was defined

const outer = () => {
   let counter = 0;
   const incrementCounter = () => {
      counter++;
   }
   return incrementCounter;
}
const newFunction = outer();
newFunction();
newFunction();


// How does this work under the hood?

// A function which accesses bindings from the scope in which it was defined, keeps those bindings alive!
// These bindings are called the COVE: Closed over Variable Environment



// Function Decoration
// Now we can write functions which 'edit' functions, so they suit our task

const oncify = (convertMe) => {
   let counter = 0;
   const inner = (input) => {
      if (counter == 0) {
         const output = convertMe(input);
         counter++;
         return output;
      }
      return "Sorry"
   }
   return inner;
}

const multiplyBy2 = num => num * 2;
const oncifiedMultiplyBy2 = oncivy(multiplyBy2);

oncifiedMultiplyBy2(10);
oncifiedMultiplyBy2(7);
