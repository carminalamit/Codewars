// Instruction
// I would like to be able to pass an array with two elements to my swapValues function to swap the values.
// However it appears that the values aren't changing.

// function swapValues() {
//     var args = Array.prototype.slice.call(arguments);
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
// }

// Can you figure out what's wrong here?

// My Solution
// The issue with the given swapValues function is that it doesn't return anything.
// Therefore, even though the values are swapped inside the function, the original array passed as an argument remains unchanged.
// To fix this, you need to modify the function to return the updated array after swapping the values.

// Here's the modified swapValues function:

function swapValues(arr) {
  const temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
  return arr;
}

// This function takes an array as an argument, swaps the values at indices 0 and 1, and then returns the updated array.
// You can call this function by passing an array with two elements, like this:

const arr = [1, 2];
swapValues(arr);
console.log(arr); // Outputs [2, 1]
