# Type Error in TypeScript Function
This repository demonstrates a common type error in TypeScript: passing a string argument to a function expecting a number.  The `add` function is designed to take two numbers and return their sum. However, the example calls `add` with a string ("20") causing a runtime error because TypeScript's type checking doesn't catch this error during compilation.

## Bug
The bug lies in the incorrect argument passed to the `add` function. TypeScript's type system enforces type safety during compilation, but it doesn't prevent runtime errors stemming from type coercion in JavaScript.