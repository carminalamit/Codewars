// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// My Solution

function squareOrSquareRoot(array) {
  return array.map((num) => {
    const sqrt = Math.sqrt(num);
    return sqrt % 1 === 0 ? sqrt : num * num;
  });
}

// We use the map() method to create a new array with the same length as the input array.
// For each number in the input array, we first calculate its square root using the Math.sqrt() function.
// We then check if the square root has a fractional part of 0 using the modulo operator %. If it does, 
// then the number has an integer square root, so we return the square root. Otherwise, 
// we square the number using the * operator and return the result.