// Instructions

// "Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative
// to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.

// Task
// Given two points P and Q, output the symmetric point of point P about Q.
// Each argument is a two-element array of integers representing the point's X and Y coordinates.
// Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

// My Solution

function symmetricPoint(p, q) {
  // Step 1: Calculate the differences in X and Y coordinates between P and Q
  const dx = q[0] - p[0];
  const dy = q[1] - p[1];

  // Step 2: Calculate the symmetric point P1 by adding the differences to Q
  const px = q[0] + dx;
  const py = q[1] + dy;

  // Step 3: Return the coordinates of point P1 as a two-element array
  return [px, py];
}

// or
function symmetricPoint(p, q) {
    return [2*q[0] - p[0], 2*q[1]  - p[1]]; 
}

// Testing the function
const p = [1, 2];
const q = [3, 4];
const result = symmetricPoint(p, q);
console.log(result); // Output: [5, 6]
