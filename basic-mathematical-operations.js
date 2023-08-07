// Instructions

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// My Solution

function basicOp(operation, value1, value2) {
  // addition
  if (operation === "+") {
    result = value1 + value2;
    // subtraction
  } else if (operation === "-") {
    result = value1 - value2;
    // multiplication
  } else if (operation === "*") {
    result = value1 * value2;
    // division
  } else if (operation === "/") {
    result = value1 / value2;
  } else {
    console.log("Invalid operation.");
    return null;
  }

  return result;
}
