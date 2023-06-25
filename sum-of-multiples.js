// Instructions

// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// My Solution
function sumMul(n, m) {
  // Step 1: Check if n and m are valid
  if (n <= 0 || m <= 0 || !Number.isInteger(n) || !Number.isInteger(m)) {
    return "INVALID";
  }

  // Step 2: Initialize the sum of multiples
  let sum = 0;

  // Step 3: Find the sum of multiples
  for (let i = n; i < m; i++) {
    if (i % n === 0) {
      sum += i;
    }
  }

  // Step 4: Return the sum
  return sum;
}
