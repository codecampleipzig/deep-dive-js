// The broken typeof operator

typeof undefined     // -> "undefined"
typeof 42            // -> "number"
typeof "Hello World" // -> "string"
typeof {}            // -> "object"
typeof []            // -> "object"
typeof console.log   // -> "function" should be "object"
String(3);
String.fromCharCode(12);
typeof null          // -> "object" should be "null"
