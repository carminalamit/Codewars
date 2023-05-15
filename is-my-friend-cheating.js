// Instructions
// A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

// Examples:
// removNb(26) should return [(15, 21), (21, 15)]
// or
// removNb(26) should return { {15, 21}, {21, 15} }
// or
// removeNb(26) should return [[15, 21], [21, 15]]
// or
// removNb(26) should return [ {15, 21}, {21, 15} ]
// or
// removNb(26) should return "15 21, 21 15"
// or

// in C:
// removNb(26) should return  {{15, 21}{21, 15}} tested by way of strings.
// Function removNb should return a pointer to an allocated array of Pair pointers, each one also allocated.

// My Solution
// Calculate the sum of all numbers in the sequence using the formula (n * (n + 1)) / 2. Assign the result to a variable called sum:
// Calculate the sum of all numbers in the sequence using the formula (n * (n + 1)) / 2. Assign the result to a variable called sum:
// Calculate the sum of all numbers in the sequence using the formula (n * (n + 1)) / 2. Assign the result to a variable called sum:
// Inside the for loop, calculate the possible value of b using the formula (sum - a) / (a + 1):
// Check if b is an integer and within the range of 1 to n. If it is, add the pair [a, b] to the result array:
// Finally, return the result array as the output of the removeNb function:

function removeNb(n) {
  const sum = (n * (n + 1)) / 2;
  const result = [];

  for (let a = 1; a <= n; a++) {
    const b = (sum - a) / (a + 1);
    if (Number.isInteger(b) && b >= 1 && b <= n) {
      result.push([a, b]);
    }
  }

  return result;
}
