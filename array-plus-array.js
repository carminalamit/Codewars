// I'm new to coding and now I want to get the sum of two arrays...
// Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// My Solution

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((acc, cur, i) => acc + cur + arr2[i], 0);
}

// Inside the callback function, we add currentValue to accumulator and
// add the element at the corresponding index in arr2.
// We use the index parameter to get the element from arr2.
// Last, we start the reduce() method with an initial value of 0.
