// Instructions

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// My Solution

// Initialize a variable called smallest to store the smallest integer. Set its initial value to the first element of the array args
// Iterate over the remaining elements of the array starting from the second element.
// For each element, compare it with the current value of smallest. If the element is smaller, update the value of smallest to the current element.
// After iterating through all the elements, smallest will contain the smallest integer in the array.
// return the value of smallest

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0]; // Step 1

    for (let i = 1; i < args.length; i++) {
      // Step 2
      if (args[i] < smallest) {
        // Step 3
        smallest = args[i];
      }
    }

    return smallest; // Step 5
  }
}
