// Instructions

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My Solution
function simpleMultiplication(number) {
  // Step 1: Check if the number is even or odd
  if (number % 2 === 0) {
    // Step 2: If the number is even, multiply by 8
    return number * 8;
  } else {
    // Step 2: If the number is odd, multiply by 9
    return number * 9;
  }
}

// Test cases
console.log(simpleMultiplication(4)); // Output should be 32 (4 * 8)
console.log(simpleMultiplication(5)); // Output should be 45 (5 * 9)

// other solution
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}
