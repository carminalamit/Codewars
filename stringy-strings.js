// Instructions
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

// function stringy(size) {
//    your code here
// }

// My Solution

// Declare an empty string variable, result, to store the alternating '1s' and '0s'.
// Use a loop to iterate size times
// Inside the loop, check if the current iteration is even or odd.
// If the iteration is even, append a '1' to the result string.
// If the iteration is odd, append a '0' to the result string.
// After the loop, return the result string.

function stringy(size) {
  let result = "";
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      result += "1";
    } else {
      result += "0";
    }
  }
  return result;
}
