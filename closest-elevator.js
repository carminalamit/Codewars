// Instructions

// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:

elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"

// My Solution

// Calculate the absolute differences between the call floor and the current floors of both elevators (left and right).

// Compare the absolute differences to determine which elevator is closer to the called floor.

// If the absolute difference between call and left is less than the absolute difference between call and right, return "left" as the closest elevator.

// If the absolute difference between call and right is less than the absolute difference between call and left, return "right" as the closest elevator.

// If the absolute differences are equal, choose the elevator to the right and return "right" as the closest elevator.

function elevator(left, right, call) {
  const leftDifference = Math.abs(call - left);
  const rightDifference = Math.abs(call - right);

  if (leftDifference < rightDifference) {
    return "left";
  } else if (rightDifference < leftDifference) {
    return "right";
  } else {
    return "right"; // Choose the elevator to the right if the differences are equal
  }
}

// another solution
function elevator(left, right, call) {
  return Math.abs(call - left) < Math.abs(call - right) ? "left" : "right";
}
