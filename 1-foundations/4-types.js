// The broken typeof operator

typeof undefined // "undefined"
typeof 42 // "number"
typeof "Hello World" // "string"
typeof {} // "object"
typeof [] // "array"
typeof console.log // js: "object", node: "function"
typeof null // "object"
typeof true // "boolean"

// Numbers
typeof Infinity // "number"
typeof NaN // "number"
typeof Number('1') // "number"

// Strings
typeof "" // "string"
typeof `template literal` // string
typeof '1' // string
typeof (typeof 1) // string, typeof always returns a string

// Booleans
typeof false // "boolean"
typeof Boolean(1) // "boolean"
typeof !!(1) // "boolean", two calls of the logical NOT operator

// Undefined
typeof undefined // "undefined"
typeof declaredButUndefinedVariable // "undefined"
typeof undeclaredVariable // "undefined"

// Objects
typeof {userId: 1} // "object"
typeof [1,2,3] // "object"
typeof new Date() // "object"
typeof /regex/ // "object"

// Functions
typeof (() => {}) // "function"
typeof class Student {} // "function" 

