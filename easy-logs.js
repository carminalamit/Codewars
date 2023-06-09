// Instructions
// Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

// My Solution
function logs(x, a, b) {
  const result = Math.log(a * b) / Math.log(x);
  return result;
}

console.log(logs(10, 100, 1000)); // Output: 6.0

// In this code, we calculate the logarithm of the product of A and B (A * B) 
// using the natural logarithm (Math.log) and then divide it by the logarithm of X (Math.log(x)) 
// to get the result of log base X (A * B).