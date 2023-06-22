// Instructions

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// My Solution

// Check if the value entered is a string.
// Use the typeof operator to check if the type of x is equal to "string".
// If it is a string, return "Error" immediately.
// If the value is not a string, perform the calculation.
// Multiply the value (x) by 50.
// Add 6 to the result of the multiplication.
// Return the final result

function problem(x) {
  if (typeof x === "string") {
    return "Error";
  }

  const result = x * 50 + 6;
  return result;
}

console.log(problem(2)); // Output: 106
console.log(problem("test")); // Output: "Error"
console.log(problem(0)); // Output: 6

// simplified version

function problem(x) {
  return typeof x === "number" ? x * 50 + 6 : "Error";
}
