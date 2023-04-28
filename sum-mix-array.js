// Given an array of integers as strings and numbers, 
// return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My Solution

function sumMix(x) {
    return x.reduce((acc, curr) => acc + Number(curr), 0);
}

// In this code, we use the reduce method to iterate over the array and accumulate the sum. 
// The reduce method takes two arguments: a callback function and an initial value for the accumulator. 
// The callback function takes two arguments: the accumulator (acc) and the current element (curr). 
// During each iteration, we convert the current element to a number using the Number function and add it 
// to the accumulator. Finally, we return the accumulator, which contains the sum of all the array values.
  