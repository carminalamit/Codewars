// Instructions
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside.
// The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

// function solution(a, b) {
//    your code here
// }

// My Solution
function solution(a, b) {
  const [short, long] = a.length < b.length ? [a, b] : [b, a];
  return short + long + short;
}

// In this solution, we utilize array destructuring to assign the shorter string to the short variable and the longer string to the long variable in a concise manner.
// The conditional (ternary) operator a.length < b.length ? [a, b] : [b, a] is used to determine which string is shorter.
// If a is shorter, it returns an array [a, b]; otherwise, it returns [b, a]. The destructuring assignment then assigns the elements of the returned array to short and long variables accordingly.
