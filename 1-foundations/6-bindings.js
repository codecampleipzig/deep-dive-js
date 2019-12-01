// There are three ways to create a binding.

var x1 = 42;
let x2 = 42;
const x3 = 42;

// Prefer const over let and let over const.

// Bindings defined with var and let can be reassigned;

x1 = 43;
x2 = 43;
// x3 = 43; ERROR!!! Can't reasign const variable

// Bindings created with var are visible in the whole function, while bindings created with let and const belong to the block they are created in.

function varFn() {
   if (true) {
      var x = 42;
      x; // -> 42
   }
   x; // -> 42
}

function letFn() {
   if (true) {
      let x = 42;
      x; // -> 42
   }
   x; // ERROR x is not defined;
}

let a = 10;
function scopes() {
   let b = 20;
   {
      let c = 30;
      return (a + b + c);
   }
}

// Updating Bindings Succinctly

let counter = 1;

counter = counter + 1;
counter; // -> 2

// Sorthand
counter += 1;
counter; // -> 3

// Even Shorter
counter++;
counter; // -> 4

// Other assignment operators
counter--;
counter -= 2;
counter /= 2;
counter *= 2;
counter %= 3;