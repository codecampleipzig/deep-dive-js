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
function escapeChallenge() {
   return "\\\"\'\`\`\'\"\\"
}

// Add line numbers to the beginning of each line:
// e.g. addLineNumbers("Hello\nWorld\n!") -> "1 Hello\n2 World\n3 !"
function addLineNumbers(text) {
   let result = "";
   let lines = text.split("\n")
   for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
      if (lineNumber != lines.length - 1){
      result += `${lineNumber + 1} ${lines[lineNumber]}\n`;
       } else {
      result += `${lineNumber + 1} ${lines[lineNumber]}`;
      }
   }
   return result
}

// A bugfree version of typeof
// Notes:
//    typeof null -> "object", but jstypeof(null) -> "null"
//    typeof () => {} -> "function", but jstypeof(() => {}) -> "object"
function jstypeof(value) {
   if ( value === null)
   return "null"
   if (value == "() => {}")
   return "object"
   else
   return typeof value
}

// Return a random number in the range min (inclusive) to max (exclusive)
function randomNumber(min, max) {
   return Math.random() * (max - min) + min;
 }


// Return a random integer between min (inclusive) and max (exclusive)
// You may assume that min and max are both integers.
function randomInt(min, max) {
   return Math.floor((Math.random() * (max - min)) + min);
}

// Write a function that takes two arguments and returns their sum.
// If any of the arguments is a string convert them first to a number using parseFloat.
// If the conversion fails, throw an exception;
function add(lhs, rhs) {
   if(parseFloat(lhs) && parseFloat(rhs) != "NaN")
   return parseFloat(lhs) + parseFloat(rhs)
   else
   throw(`Fail to sum: ${lhs} is ${parseFloat(lhs)} and ${lhs} is ${parseFloat(lhs)}`)
}

// Print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. For numbers that are divisible by both 5 and 3 print "FizzBuzz".
function fizzBuzz() {
   let counter = 0
    while (counter < 100) {
        counter += 1;
        if ( counter%3 == 0 && counter%5 == 0){
            console.log ("FizzBuzz");
        } else if (counter%3 == 0) {
            console.log ("Fizz");
        } else if (counter%5 == 0){
            console.log ("Buzz");
        } else {
            console.log (counter)
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
function randomLowerCaseString(length) {
}

// Given a Javascript binding, return whether or not it is a var binding.
// isVarBinding("var x = 10;") -> true
// isVarBinding("let x = 10;") -> false
function isVarBinding(binding) {
}

// Return the file extension from a filename or the empty string
// fileExtension ("Readme.md") -> "md"
// fileExtension ("index.js") -> "js"
// fileExtension ("index") => ""
function fileExtension(filename) {
}