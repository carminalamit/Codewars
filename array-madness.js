// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.
// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

function arrayMadness(a, b) {
  let sumOfSquares = 0;
  let sumOfCubes = 0;

  // calculate sum of squares of elements in a
  for (let i = 0; i < a.length; i++) {
    sumOfSquares += a[i] ** 2;
  }

  // calculate sum of cubes of elements in b
  for (let i = 0; i < b.length; i++) {
    sumOfCubes += b[i] ** 3;
  }

  // compare the sums and return true if sum of squares is strictly greater than sum of cubes
  return sumOfSquares > sumOfCubes;
}
