module.exports = {
   escapeChallenge,
   addLineNumbers,
   jstypeof,
   randomNumber,
   randomInt,
   add,
   fizzBuzz,
   randomLowerCaseString,
   greeting,
   isVarBinding,
   fileExtension
}

// Return this string \"'``'"\
function escapeChallenge() { // check
   return "\\\"\'\`\`\'\"\\";
}

// Add line numbers to the beginning of each line:
// e.g. addLineNumbers("Hello\nWorld\n!") -> "1 Hello\n2 World\n3 !"
function addLineNumbers(text) { // TODO: put space around operator
   return text.split("\n").map((line, i) => `${i+1} ${line}`).join("\n");
}

// A bugfree version of typeof
// Notes:
//    typeof null -> "object", but jstypeof(null) -> "null"
//    typeof () => {} -> "function", but jstypeof(() => {}) -> "object"
function jstypeof(value) { // check
   if ( value === null ) {
      return "null"
   }
   else if ( typeof value == "function" ){
      return "object"
   }
   else {
      return typeof value
   }
}

// Return a random number in the range min (inclusive) to max (exclusive)
// 
function randomNumber(min, max) { // check
   if ( min >= max) {
      throw new Error("max has to be greater min")
   }
   const range = max - min;
   return min + Math.random() * range;
}

// Return a random integer between min (inclusive) and max (exclusive)
// You may assume that min and max are both integers.
function randomInt(min, max) { // check
   min = (min < 0) ? min + 1 : min;
   return Math.floor(randomNumber(min, max));
}

// Write a function that takes two arguments and returns their sum.
// If any of the arguments is a string convert them first to a number using parseFloat.
// If the conversion fails, throw an exception;
function add(lhs, rhs) {  // check 
   lhs = parseFloat(lhs);
   rhs = parseFloat(rhs);

   if (!lhs || !rhs) {
      throw new Error("NaN")
   }

   return lhs + rhs;
}

// Print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. For numbers that are divisible by both 5 and 3 print "FizzBuzz".
function fizzBuzz() { // TODO: put space around operators
   for (let i = 1; i <= 100; i++) {
      if (i%5 == 0 && i%3 == 0) {
         console.log("FizzBuzz");
      }
      else if (i%5 == 0) {
         console.log("Buzz");
      }
      else if (i%3 == 0) {
         console.log("Fizz");
      } else {
         console.log(i);
      }
   }
}

// Return a greeting string for the specified language
// greeting("Anne", "English") -> "Hello Anne!"
// greeting("Bob", "French") -> "Salut Bob!"
// greeting("Carolin", "German") -> "Hallo Carolin!"
// Throw an exception if the language is not known
function greeting(name, language) {
}

// Return a random string of lowercase ASCII characters.
// Notes: Take a look at the string method fromCodePoint()
function randomLowerCaseString(length) { // Check
   let output = "";
   for (let i = 0; i < length; i++) {
      let random = randomInt(97, 123);
      output += String.fromCodePoint(random);
   }
   return output;
}

// Given a Javascript binding, return whether or not it is a var binding.
// isVarBinding("var x = 10;") -> true
// isVarBinding("let x = 10;") -> false
function isVarBinding(binding) { // TODO: write an else block to throw an exception, or just return binding.startsWith("var")
   if (binding.startsWith("var")) {
      return true
   }
   else if (binding.startsWith("let")) {
      return false
   }
}

// Return the file extension from a filename or the empty string
// fileExtension ("Readme.md") -> "md"
// fileExtension ("index.js") -> "js"
// fileExtension ("index") => ""
function fileExtension(filename) { // TODO: Space around operators
   let parts = filename.split(".");
   if ( parts[1] ) {
      return parts[parts.length-1];
   } else {
      return "";
   }
}