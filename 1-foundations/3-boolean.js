// Literals
true;
false;

// Negation
!true; // -> false
!false; // -> true

// Conversion to boolean
// All values are truthy except for 0, -0, NaN, false, null, undefined and ""
Boolean("") // -> false
Boolean(0) // -> false
Boolean([]) // -> true
Boolean(-1) // -> true
Boolean(null) // -> true
Boolean(undefined) // -> undefined

// Logical Operators

true && false
true && true

false || true
false || false

true ? 1 : 2
false ? 1 : 2

// Examples

1 + 1 == 2 && 10 * 10 > 50;

// Short Circuiting: Lazy Evaluation

true && console.log ("Yep")
false && console.log ("Yep");
// Often used to guard member access
// project && project.title

null || "No user found";
"Agnes" || "No user found";
// Often used to provide a fallback alternative

1 && true && "Yep"
1 && true && "Yep" && ""
"" || null || 0
"" || null || 0 || 1 || NaN || {}