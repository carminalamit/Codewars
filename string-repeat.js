// Instructions

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// My Solution

function repeatStr(n, s) {
  // repeat method is used on the string s with the argument n. It repeats the string s exactly n times,
  // and the resulting string is returned
  return s.repeat(n);
}
