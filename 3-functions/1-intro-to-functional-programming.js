// Functional Programming
// A paradigm to tackle complex problems

// Problem:
// In an application without functions, every line potentially depends on every other line.
// Why?
// Because every line can use and change all of the data in the application.
// The data is shared between all lines.

// Solution: Functions

// Reduce the potential impact of any given line to maybe 10 other lines of code
// But:
// Even with a 10 line function 'reasoning' through what each line does can be hard
// And there could still be shared data (via global variables that the function may touch)

// Higher Goal

// Imagine if we could structure our code into individual pieces where almost every single line is self-contained
// The only thing any given line depends on are inputs (stated in the same line)
// The only consequence of the line would be its output (also stated in that same line)
// And each line could get a nice human-readable label for when we use it.

// How can we do this??




// Real Solution: Functional Programming
// 1. Tiny functions: Every single line becomes its own function
// 2. No consequences except on that line
// 3. Recombine/compose: Build up our application by using these small self-contained blocks

pipe(
   getPlayerName,
   getFirstName,
   properCase,
   addUserLabel,
   createUserTemplate
) ({name: "rick sanchez", score: 255})

// These are the tools we need:
// 1. Higher-Order Functions & Callbacks
// 2. Reduce
// 3. Function Composition
// 4. Purity
// 5. Closure
// 6. Function Decoration
// 7. Partical Application and currying