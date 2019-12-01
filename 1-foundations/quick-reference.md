# Quick Reference: Javascript Foundations

## Values

What is a value?

A discrete entity.

Examples: 42, 'Hello World', true, false, null, [1, 2, 3], {'A', 'B'}

## Types

What is a type?

A set of values.

The fundamental types in Javascript:

- null
- undefined
- boolean
- number
- string
- object

The _typeof_ operator can be used to query information about the type of an expression.

## Operators

What is an operator?

A symbol representing a fundamental builtin operation that can be applied to operands

The number of operands of an operator, is called its arity.

- 1: unary
- 2: binary
- 3: ternary
- ?: variadic

Operators in Javascript
```
+ - * / %
```

## Expressions

What is an expression?
A unit of source code, which can be evaluated to yield a value.

Kinds of expressions in Javascript:
Literal Expressions
Operator Expressions
Identifier Expressions

## Statements

What is a statement?
The building blocks of a javascript program. A javascript program is a list of statements.

What is the difference between an expression and a statement?


## null & undefined

Write your code, so that null and undefined can be used interchangeably.
You can rely on == and conversion to boolean to make this work.
```
Boolean(null); // -> false
Boolean(undefined); // -> false

null == undefined; // -> true
```