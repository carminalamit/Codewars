// Instructions
// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter().
// Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

// My Solution

Array.prototype.filter = function (func) {
  var filteredArray = [];

  for (var i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }

  return filteredArray;
};

// In this implementation, the filter function takes a callback function func as an argument.
// It creates an empty filteredArray to store the filtered elements. Then, it iterates over each
// element of the array using a for loop. If the callback function returns true for a particular
// element (indicating that it should be included in the filtered array), the element is added to
// filteredArray using the push method.
