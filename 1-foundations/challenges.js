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
   return `\\\"\'\`\`\'\"\\`
}

// Add line numbers to the beginning of each line:
// e.g. addLineNumbers("Hello\nWorld\n!") -> "1 Hello\n2 World\n3 !"
function addLineNumbers(text) { // check
   const array = text.split("\n");
   let result = "";
   for (let i = 0; i < array.length; i++) {
      result += `${i == 0 ? "" : "\n"}${ i+1 } ${ array[i] }`
   }
   return result;
}

// A bugfree version of typeof
// Notes:
//    typeof null -> "object", but jstypeof(null) -> "null"
//    typeof () => {} -> "function", but jstypeof(() => {}) -> "object"
function jstypeof(value) { // check
   if (value === null) {
      return "null";
   }
   else if(typeof value == "function") {
      return "object";
   }
   return typeof value;
}

// Return a random number in the range min (inclusive) to max (exclusive)
function randomNumber(min, max) { // check
   return Math.random() * (max - min) + min;
}

// Return a random integer between min (inclusive) and max (exclusive)
// You may assume that min and max are both integers.
function randomInt(min, max) {
   // TODO: You do the Math.floor(min) twice. Can you refactor so it only happens once
   return Math.floor(Math.random() * (Math.floor(max)-Math.floor(min)) + Math.floor(min));
}

// Write a function that takes two arguments and returns their sum.
// If any of the arguments is a string convert them first to a number using parseFloat.
// If the conversion fails, throw an exception;
function add(lhs, rhs) {
   if(parseFloat(lhs) && parseFloat(rhs) != NaN) { // TODO: this is parsed as  (parseFloat(lhs) && parseFloat(rhs)) != NaN
      // Also you can't use == with NaN and it should be || not &&
      return parseFloat(lhs) + parseFloat(rhs);
   }
   else {
      throw new Error ("Error");
   }

}

// Print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. For numbers that are divisible by both 5 and 3 print "FizzBuzz".
function fizzBuzz() { // check, maybe change it to i <= 100
   for (let i = 1; i < 101; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
         console.log("FizzBuzz");
      }
      else if (i % 3 == 0) {
         console.log("Fizz");
      }
      else if (i % 5 == 0) {
         console.log("Buzz");
      }
      else {
         console.log(i)
      }
   }
}

// Return a greeting string for the specified language
// greeting("Anne", "English") -> "Hello Anne!"
// greeting("Bob", "French") -> "Salut Bob!"
// greeting("Carolin", "German") -> "Hallo Carolin!"
// Throw an exception if the language is not known
function greeting(name, language) {
   const greetings = {
      "English" : "Hello",
      "French" : "Salut",
      "German" : "Hallo"
   }
   return `${greetings[language]} ${name}!`;
}

// Return a random string of lowercase ASCII characters.
// Notes: Take a look at the string method fromCodePoint()
function randomLowerCaseString(length) {
   let str = "";
   for (let i = 0; i < length; i++) {
      str += `${(String.fromCodePoint(Math.floor(Math.random() * (129 - 97) + 97)))}`;
   }
   return str;
}

// Given a Javascript binding, return whether or not it is a var binding.
// isVarBinding("var x = 10;") -> true
// isVarBinding("let x = 10;") -> false
function isVarBinding(binding) {
   return binding.includes("var") ? true : false;
}

// Return the file extension from a filename or the empty string
// fileExtension ("Readme.md") -> "md"
// fileExtension ("index.js") -> "js"
// fileExtension ("index") => ""
function fileExtension(filename) {
   return filename.includes(".") ? filename.split(".")[1] : "";
}