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
   return "\\\"\'\`\`\'\"\\";
}

// Add line numbers to the beginning of each line:
// e.g. addLineNumbers("Hello\nWorld\n!") -> "1 Hello\n2 World\n3 !"
function addLineNumbers(text) {
   textArray = text.split("\n");
   return textArray
      .map((element, index) => `${index + 1} ${element}`)
      .join("\n");
}

// A bugfree version of typeof
// Notes:
//    typeof null -> "object", but jstypeof(null) -> "null"
//    typeof () => {} -> "function", but jstypeof(() => {}) -> "object"
function jstypeof(value) {
   if (!value && typeof (value) == 'object') {
      return 'null';
   } else if (typeof (value) == 'function') {
      return 'object'
   } else
      return typeof (value);
}

// Return a random number in the range min (inclusive) to max (exclusive)
function randomNumber(min, max) {
   // example: (1, 10)
   const mathRandom = Math.random();
   const randomMin = mathRandom * min;
   const randomMax = mathRandom * max;
   return randomMax - randomMin + min;
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
   if (!lhs || !rhs) {
      throw `One of the arguments is not a value`;
   }
   let lhsInt = lhs;
   if (typeof (lhs) == "string") {
      lhsInt = parseFloatAndThrow(lhs);
   }
   let rhsInt = rhs;
   if (typeof (rhs) == "string") {
      rhsInt = parseFloatAndThrow(rhs);
   }
   return lhsInt + rhsInt;

   function parseFloatAndThrow(value) {
      const parsedValue = parseFloat(value);
      if (Number.isNaN(parsedValue)) {
         throw `Value ${value} is not a number!`;
      } else {
         return parsedValue;
      }
   }
}



// Print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. For numbers that are divisible by both 5 and 3 print "FizzBuzz".
function fizzBuzz() {
   // print from 1 to 100
   // if %3 == 0, print "Fizz"
   // if %5 == 0 && %3 !=0, print "Buzz"
   // if %5 == 0 && %3 ==0, print "FizzBuzz"
   let maxNumber = 100;
   let result = '';
   for (let number = 1; number <= maxNumber; number++) {
      if (isDivisibleByThree(number) && isDivisibleByFive(number)) {
         result = result + "FizzBuzz";
      } else if (isDivisibleByThree(number)) {
         result = result + "Fizz";
      } else if (isDivisibleByFive(number)) {
         result = result + "Buzz";
      } else {
         result = result + number;
      }
   }
   console.log(result);

   function isDivisibleByThree(number) {
      return number % 3 == 0;
   }

   function isDivisibleByFive(number) {
      return number % 5 == 0;
   }
}

// Return a greeting string for the specified language
// greeting("Anne", "English") -> "Hello Anne!"
// greeting("Bob", "French") -> "Salut Bob!"
// greeting("Carolin", "German") -> "Hallo Carolin!"
// Throw an exception if the language is not known
function greeting(name, language) {
   switch (language) {
      case "English":
         return `Hello ${name}!`;
      case "French":
         return `Salut ${name}!`;
      case "German":
         return `Hallo ${name}!`;
      default:
         throw new Error(`Language is not known!`);
   }
}

// Return a random string of lowercase ASCII characters.
// Notes: Take a look at the string method fromCodePoint()
function randomLowerCaseString(length) {
   // lowercase ASCII chars have codes from 97 to 122 (inclusive)
   let randomString = '';
   for (let i = 1; i <= length; i++) {
      let randomAscii = Math.floor((Math.random() * (122 - 97)) + 97);
      randomString += String.fromCharCode(randomAscii);
   }
   return randomString;
}

randomLowerCaseString(10);

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
   const filenameArray = filename.split(".");
   if (filenameArray.length == 1) {
      return "";
   }
   return filenameArray[filenameArray.length - 1];
}