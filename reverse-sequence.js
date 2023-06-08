// Instructions

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// My Solution

const reverseSeq = (n) => {
  let array = [];
  for (let i = n; i >= 1; i--) {
    array.push(i);
  }
  return array;
};

// Testing the function
const n = 5;
const result = reverseSeq(n);
console.log(result); // Output: [5, 4, 3, 2, 1]

// the reverseSeq function is defined as an arrow function that takes an input n.
// It initializes an empty array and uses a for loop starting from n and decrementing by 1 until reaching 1.
// In each iteration, it appends the current value of i to the array using the push method.
// Finally, the function returns the generated array.
