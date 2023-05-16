// Instructions
// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.

// My Solution
// To return the Nth even number in JavaScript, you can modify the previous code by subtracting 1 from n before multiplying by 2.
// This adjustment is made to account for the fact that the position n now starts from 1 instead of 0.

function nthEven(n) {
  return 2 * (n - 1);
}
