// Instructions

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// My Solution

function noBoringZeros(n) {
  //   This function first checks if the input n is zero.
  //   If it is, it immediately returns 0 since there are no trailing zeros to remove.
  if (n === 0) {
    return 0;
  }

  // Remove trailing zeros using modulo operator
  while (n % 10 === 0) {
    n /= 10;
  }

  return n;
}
