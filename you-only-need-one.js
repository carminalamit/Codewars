// You will be given an array a and a value x.
// All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// My Solution

function check(a, x) {
  // your code here
  return a.includes(x);
}

// The containsValue() function takes two parameters: an array and a value to search for. 
// It uses the includes() method to check whether the array contains the specified value. 
// The includes() method returns true if the value is found in the array and false otherwise.