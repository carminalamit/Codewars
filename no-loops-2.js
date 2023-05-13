// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// My Solution
function check(a, x) {
  return a.includes(x);
}

// includes() method checks if an array contains a certain value and returns true if it does, and false otherwise.
// We simply call includes() on the input array a with the value x and return the result.
