// Instructions

// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions?
// We can assure, that only non-negative numbers are passed as arguments.
// So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

Math.round = function (number) {
  return 0; // TODO: fix this
};

Math.ceil = function (number) {
  return 0; // TODO: fix this
};

Math.floor = function (number) {
  return 0; // TODO: fix this
};

// My Solution

// Math.round():
// to round a number to the nearest integer, we can use the Math.floor() function combined with adding 0.5 and then converting the result back to an integer.
// return the rounded integer.
Math.round = function (number) {
  return Math.floor(number + 0.5);
};

// Math.ceil():
// to find the ceiling value of a number, we can first convert it to an integer using the Math.floor() function.
// if the number is already an integer, return it as is.
// otherwise, add 1 to the floor value and return it.
Math.ceil = function (number) {
  const floorValue = Math.floor(number);
  return number === floorValue ? floorValue : floorValue + 1;
};

// Math.floor():
// since we are assured that only non-negative numbers are passed as arguments, the floor value of a non-negative number is simply the integer part of that number.
// return the integer part of the number.
Math.floor = function (number) {
  return parseInt(number);
};

console.log(Math.round(4.3)); // Output: 4
console.log(Math.ceil(4.3)); // Output: 5
console.log(Math.floor(4.3)); // Output: 4
