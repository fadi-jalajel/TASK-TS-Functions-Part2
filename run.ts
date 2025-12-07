import { greet, isOdd, oddsSmallerThan, squareOrDouble } from "./src/functions";

// Test the functions
console.log("=== Testing Functions ===\n");

// Test greet
console.log("1. Testing greet():");
greet("Hamza");
greet("World");
console.log();

// Test isOdd
console.log("2. Testing isOdd():");
console.log(`isOdd(7) = ${isOdd(7)}`); // should be true
console.log(`isOdd(10) = ${isOdd(10)}`); // should be false
console.log(`isOdd(0) = ${isOdd(0)}`); // should be false
console.log();

// Test oddsSmallerThan
console.log("3. Testing oddsSmallerThan():");
console.log(`oddsSmallerThan(7) = ${oddsSmallerThan(7)}`); // should be 3
console.log(`oddsSmallerThan(15) = ${oddsSmallerThan(15)}`); // should be 7
console.log(`oddsSmallerThan(1) = ${oddsSmallerThan(1)}`); // should be 0
console.log();

// Test squareOrDouble
console.log("4. Testing squareOrDouble():");
console.log(`squareOrDouble(16) = ${squareOrDouble(16)}`); // should be 32
console.log(`squareOrDouble(9) = ${squareOrDouble(9)}`); // should be 81
console.log(`squareOrDouble(0) = ${squareOrDouble(0)}`); // should be 0
console.log();

console.log("=== All tests completed ===");

