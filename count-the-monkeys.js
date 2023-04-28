// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), 
// but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), 
// populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]

function monkeyCount(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

// In this function, we initialize an empty array result to store the numbers.
// Then, we use a for loop to iterate from 1 up to n. During each iteration,
// we push the current number i into the result array using the push method.
// Finally, we return the result array containing all the numbers from 1 up to n.
