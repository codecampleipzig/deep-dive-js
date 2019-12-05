// Objects are used for associative data.
// Keys are associated with values.
// Values can be looked up, given a key

// **********************************
// # Literals
// **********************************

const packageJSON = {
   "name": "deep-dive-js",
   "version": "1.0.0",
   "main": "index.js",
   "dependencies": {},
   "devDependencies": {
     "eslint": "^6.7.2",
     "jest": "^24.9.0"
   },
   "scripts": {
     "test": "jest",
     "lint": "eslint **/challenges.js"
   },
   "keywords": ["js", "tutorial"],
   "author": "",
   "license": "ISC"
 }

 const vscodeSettings = {
   "editor.wordWrap": "on",
   "editor.defaultFormatter": "esbenp.prettier-vscode",
   "editor.fontSize": 12,
   "peacock.favoriteColors": [
      {
         "name": "Angular Red",
         "value": "#b52e31"
      },
      {
         "name": "JavaScript Yellow",
         "value": "#f9e64f"
      },
      {
         "name": "Node Green",
         "value": "#215732"
      },
      {
         "name": "React Blue",
         "value": "#00b3e6"
      },
      {
         "name": "Vue Green",
         "value": "#42b883"
      }
   ]
}

// Keys are always strings, values can have any type

// " Quotes around key are optional, if the key is a valid JavaScript Identifier

const color = {
   name: "JavaScript Yellow",
   value : "#f9e64f",
   "base-color" : "Yellow"
}

// Spreading Syntax:
const customColor = {
   ...color,
   customized: true,
   value : "#fae54g" // keys can be overwritten
}

// If key is already a valid identifier:
function createColor(name, value) {
   return {
      name, // syntactic sugar for name: name
      value, // syntactic sugar for value: value
      custom: false
   }
}

// **********************************
// # Accessing Elements
// **********************************

// Dot Notation: if key is a string that could also be a valid JS Identifier
color.name;
color.value;
//Doesn't Work: color.custom-color

// Bracket Notation: More general. Lookup using any expression
color["name"];
color["value"];
color["custom-" + "color"];

// They can also be chained together
packageJSON.scripts.test;
packageJSON["scripts"]["test"];

// If a value doesn't exist:
color.hexValue;

// Mutation: These lookup expressions (both dot and bracket notation) can also appear on the left side of an assignment
color.name = "Angular Red"; // Mutation, although const!!!
color["value"] = "#b52e31";
// If the key doesn't exist, it will be created;
color.hexValue = 0xb52e31;
// Update Assignments also work:
color.hexValue += 0x010101;

// **********************************
// # Iterating over an object
// **********************************

const emojis = {
   grinning : "\u{1F600}",
   beaming : "\u{1F604}",
   sweating : "\u{1F605}",
   starStruck: "\u{1f929}",
   thinking: "\u{1f914}",
   exploding: "\u{1f92f}"
};

Object.keys(emojis);
// ["grinning", "beaming", "sweating", "starStruck", "thinking", "exploding"]
Object.values(emojis);
//["\u{1F600}", "\u{1F604}", "\u{1F605}", "\u{1f929}", "\u{1f914}", "\u{1f92f}"]
Object.entries(emojis);
//[["grinning", "\u{1F600}"], ["beaming", "\u{1F604}"], ["sweating", "\u{1F605}", ...]

for (let [expression, emoji] of Object.entries(emojis)) {
   console.log (`${expression} face: ${emoji}`);
}

Object.values(emojis).join(" ");

// **********************************
// # Destructuring
// **********************************

// Create bindings for specific keys of an object
const {a, b} = {a: 1, b: 2};

// Can also bind all remaining properties to a name using ...
const {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4};
a;
b;
rest;

// Examples
// Old Style:
const grinning = emojis.grinning;
const beaming = emojis.beaming;

// New Style:
const {grinning, beaming} = emojis;

// Also works with function parameters
// ... can be used to create a binding for the remaining object
function darker ({hexValue, ...color}) {
   return {
      ...color,
      hexValue : hexValue - 0x010101
   }
}

// Destructuring can also be nested
const {
   scripts : {
      test,
      lint
   }
} = packageJson;

scripts // {test: "jest", lint: "eslint **/challenges.js"}
test // "jest"
lint // "eslint **/challenges.js"