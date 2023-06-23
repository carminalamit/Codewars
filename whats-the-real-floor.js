// Instructions

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place.
// In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

// My Solution

// First, handle the case of the ground floor (American 1st floor):
// If n is equal to 0 or 1, return 0. In the European system, the ground floor is represented as 0.
// Second, handle the case of negative floors (basements):
// If n is less than 0, return n as it is. Negative floors remain the same in both the American and European systems
// Third, handle the case of floors above the 13th floor:
// If n is greater than 13, subtract 2 from n. Since there is no 13th floor in the American system, we skip it in the European system, and floors above 13 move down by two to account for the omission.
// Fourth, Handle the case of floors from 2 to 13
// If n is between 2 and 13 (inclusive), subtract 1 from n. This adjustment is required because the European system skips the 13th floor.

function getRealFloor(n) {
  if (n === 0 || n === 1) {
    return 0;
  } else if (n < 0) {
    return n;
  } else if (n > 13) {
    return n - 2;
  } else {
    return n - 1;
  }
}
// simplified version

function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}
