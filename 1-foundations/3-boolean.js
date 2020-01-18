// Literals
true;
false;

// Negation
!true; // -> false
!false; // -> true

!1
!true
false

// Conversion to boolean
// All values are truthy except for 0, -0, NaN, false, null, undefined and ""
Boolean("") // -> false
Boolean(0) // -> false
Boolean([]) // -> true
Boolean(-1) // -> true
Boolean(null) // -> false
Boolean(undefined) // -> false

// Logical Operators

true && false
true && true

false || true
false || false

true ? 1 : 2 // -> 1
false ? 1 : 2 // -> 2

false ? [1, 3] : 3 // -> 3

function f() {
   // Alternative 1
   console.log (3 < 1 ? [1, 3] : "No");

   // Alternative 2
   if (3 < 1) {
      console.log ([1, 3]);
   }
   else {
      console.log ("No");
   }
}


1 + 1 == 2 && 10 * 10 > 50;

1 + 1 != 2 || 10 * 10 > 50; // true
1 + 1 != 2 && 10 * 10 > 50; // false

// Short Circuiting: Lazy Evaluation

true && true && true && false && true && true;
false || false || false || true || false;


true && console.log ("Yep"); // -> OUT: "Yep"
false && console.log ("Yep");// -> OUT: ""

// Often used to guard member access
// project && project.title

// const project = {title: "My Project"}
const project = null;

console.log (project && project.title);

"A" || "B"; // -> "A"

const user = null;
console.log (`Hello ${user || "Lovely User"}!`);

null || "No user found"; // "No user found"
null && "No user found"; // null
"Agnes" || "No user found"; // "Agnes"
// Often used to provide a fallback alternative

1 && true && "Yep" // -> "Yep"
1 && true && "Yep" && "" // -> ""
"" || null || 0 // -> 0
"" || null || 0 || 1 || NaN || {} // -> 1