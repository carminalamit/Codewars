// Instructions

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// My Solution

// Initialize a variable called sum to store the cumulative sum. Set its initial value to 0.
// Iterate from 1 to num (inclusive).
// In each iteration, add the current number to the sum variable.
// After completing the iteration, sum will contain the summation of every number from 1 to num.
// Finally, return the value of sum

const summation = function (num) {
  let sum = 0; // Step 1

  for (let i = 1; i <= num; i++) {
    // Step 2
    sum += i; // Step 3
  }

  return sum; // Step 5
};
