// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My Solution

function findAverage(array) {
  return array.length
    ? array.reduce((total, num) => total + num) / array.length
    : 0;
}

// I use the ternary operator condition ? runIfTrue : runIfFalse to check whether the input array numbers is empty. 
// If the array is not empty, the function calculates the average using the reduce() method 
// and returns it. Otherwise, it returns 0.