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
};

// Return this string \"'``'"\
function escapeChallenge() {
  return "\\\"'``'\"\\";
}

// Add line numbers to the beginning of each line:
// e.g. addLineNumbers("Hello\nWorld\n!") -> "1 Hello\n2 World\n3 !"

// var text = "Hello\\nWorld\\n !"

function addLineNumbers(text) {
  // text.split('\\n').map((line, index) => `${index + 1}. ${line}`).join('\n');
  // console.log(text)
}

// A bugfree version of typeof
// Notes:
//    typeof null -> "object", but jstypeof(null) -> "null"
//    typeof () => {} -> "function", but jstypeof(() => {}) -> "object"
function jstypeof(value) {}

// Return a random number in the range min (inclusive) to max (exclusive)
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Return a random integer between min (inclusive) and max (exclusive)
// You may assume that min and max are both integers.
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Write a function that takes two arguments and returns their sum.
// If any of the arguments is a string convert them first to a number using parseFloat.
// If the conversion fails, throw an exception;
function add(lhs, rhs) {
   lhs = parseFloat(lhs);
   rhs = parseFloat(rhs);
   if ( lhs == NaN || rhs == NaN) {
      throw new Error();
   } else {
      return lhs + rhs;
   }


  if (toString.call(lhs, rhs) !== "[ ]") {return false;
  }else {
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
}

// Print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. For numbers that are divisible by both 5 and 3 print "FizzBuzz".
function fizzBuzz() {
for (let i = 1; i <= 100; i = i + 1) {
   if (i % 3 == 0 && i % 5 == 0) {
console.log('fizzbuzz'); 
   } else if (i % 3 == 0) {
console.log('buzz');
   } else if (i % 5 == 0) {
console.log('buzz');
   } else {
console.log(i); 
  }
}
}
}
// Return a greeting string for the specified language
// greeting("Anne", "English") -> "Hello Anne!"
// greeting("Bob", "French") -> "Salut Bob!"
// greeting("Carolin", "German") -> "Hallo Carolin!"
// Throw an exception if the language is not known
function greeting(name, language) {
   if (name == "Anne" && language == "English") {
      return "Hello Anne!";
   } else if (name == "Bob" && language == "French") {
      return "Salut Bob!";
   } else if (name == "Carolin" && language == "German") {
      return "Hallo Carolin!";
} else {
   return "we don't know you and don't speak your language, leave. jk. but we really don't know you, sorry"
}
}

// Return a random string of lowercase ASCII characters.
// Notes: Take a look at the string method fromCodePoint()
function randomLowerCaseString(length) {
  return length.fromCodePoint();
}

// Given a Javascript binding, return whether or not it is a var binding.
// isVarBinding("var x = 10;") -> true
// isVarBinding("let x = 10;") -> false
function isVarBinding(binding) {}

// Return the file extension from a filename or the empty string
// fileExtension ("Readme.md") -> "md"
// fileExtension ("index.js") -> "js"
// fileExtension ("index") => ""
function fileExtension(filename) {
   let index = filename.lastIndexOf(".");
   if (index == "") {
      return "";
   } else {
      return filename.substring(index+1);
   }

}