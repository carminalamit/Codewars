// Instructions
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

// As you can see, the lists are cascading; ie, they overlap, but never out of order.

// My Solution
// Create an empty array to store the cascading subsets. We'll call it result:
// Iterate over the input array up to the index where n elements can be included in a subset:
// Inside the loop, extract a subset of size n starting from the current index i:
// Push the subset into the result array:
// Finally, return the result array as the output of the eachCons function:

function eachCons(array, n) {
  const result = [];

  for (let i = 0; i <= array.length - n; i++) {
    const subset = array.slice(i, i + n);
    result.push(subset);
  }

  return result;
}
