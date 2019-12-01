// Strings are created with ' or ".
'abc';
"Hello, world";

// Interpolation with `
`3 * 5 = ${3 * 5}`;

// Strings are concatenated with +
"Hello " + "world!";
"Number " + 666;

// Special characters like new line must be escaped using \

"This is the first line\nAnd this is the second"

"A new line character is written like \"\\n\"."

// Length

"Hello".length;

// Conversion to String
String(23) // -> "23"
String("Hello") // -> "Hello"
String(null) // -> "null"
String([]) // -> ""
String([1, 2, 3]) // ->"1,2,3"
String({}) // -> "[object Object]"

// Methods

"Hello".charAt(2);
"Hello"[2];

// Code Points
// The characters in a string are Unicode Code Points, i.e. numbers

"A".codePointAt(0); // -> 65
String.fromCodePoint(65); // -> "A"


// Manipulation
"Hello".substring(2);
"Hello".substring(1, 3);
"Hello".substring(2, 2);
"Hello".substring(0, 3);


// Querying
"You don't know Jack".endsWith("Jack") // -> true
"You don't know Jack".startsWith("Y") // -> true
"You don't know Jack".includes("know") // -> true

// Finding 
"You don't know Jack".indexOf("don") // -> 4
"You don't know Jack".indexOf("!") // -> -1

"Allright Allright Allright".indexOf("All") // -> 0
"Allright Allright Allright".indexOf("All", 1) // -> 9
"Allright Allright Allright".lastIndexOf("All") // -> 18

// Triming Whitespace
"   freddie@pm.me  ".trim() // -> "freddie@pm.me"

// Splitting Words
"You don't know Jack".split(" ") // -> ["You", "don't", "know", "Jack"]

// Replace

const p = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?"
p.replace("dog", "moose") // -> "The quick brown fox jumps over the lazy moose. If the moose reacted, was it really lazy?"