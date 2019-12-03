// Literals
42;
3.5;

//4

// Scientific notation
1e6;
3.5e2;
123e-2;

// Hexadecimal
0xff;
0xFF;
0xA;
0x10;

// Binary
0b10;
0b1101;

// Arithmetic Operators
3 + 5;
4 - 10;
5 * 7;
10 / 4;
-1;

// Modulo Division
4 % 2;
4 % 3;
4.5 % 3;
-4 % 3;

// Parenthesis can be used to group expressions
3 * (2 + 4);
3 * 2 + 4;
-(3 + 5);

// Special Values;
infinity;
-infinity;
NaN;

// Special rule:
NaN == NaN; // -> false
// Use this function to check for NaN
Number.isNaN(NaN); // -> true

1 / 0; // -> infinity
-1 / 0; // -> -inifinity
1 % 0; // -> NaN

// Converting to Number
Number("1"); // -> 1
Number("1.234"); // -> 1.234
Number("One"); // -> NaN

// But edge cases
Number(""); // -> 0
Number(null); // -> 0
Number([]); // -> 0
Number(false); // -> 0
Number(true); // -> 1

// Safer:
parseFloat("1"); // -> 1
parseFloat("1.234"); // ->1.234
parseFloat("One"); // -> NaN
parseFloat(null); // -> NaN
parseFloat(""); // -> NaN
parseFloat([]); // -> NaN
parseFloat(false); // -> NaN

// Rounding
Math.floor(1.234);
Math.ceil(1.234);
Math.round(1.5);
parseInt("1.8");

// Random Number
Math.random();

// Absolute Value
Math.abs(-3); // -> 3
