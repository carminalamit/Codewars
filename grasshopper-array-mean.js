// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4

// My Solution
function findAverage(nums) {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  const mean = sum / nums.length;
  return mean;
}

// We start by using the reduce method to calculate the sum of the numbers in the input array nums.
// The reduce method takes a callback function that takes two arguments: acc, which is the accumulator (i.e., the running total of the sum),
// and num, which is the current element of the array being processed. The callback function simply adds the current element to the accumulator.

// We pass an initial value of 0 as the second argument to reduce to ensure that the accumulator starts at zero.

// After calculating the sum, we divide it by the length of the input array nums to get the mean, and return it.

// We can test the function with the following example:

// console.log(findAverage([1, 3, 5, 7])); // expected output: 4
