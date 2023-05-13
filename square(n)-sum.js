// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

// My Solution

function squareSum(numbers) {
    return numbers.reduce(function(sum, num) {
      return sum + (num * num);
    }, 0);
}

// or

const squareSum = numbers => numbers.reduce((sum, num) => sum + (num * num), 0);
