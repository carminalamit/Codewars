// Instructions
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// My Solution
function between(a, b) {
    return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}
  
// Array.from() is used to create a new array. It takes an object that specifies the length of the array and a mapping function.
// The object { length: b - a + 1 } specifies the length of the array. The length is calculated by subtracting a from b and adding 1 to include both endpoints (b - a + 1).