// // Instructions

// // Kids drink toddy.
// // Teens drink coke.
// // Young adults drink beer.
// // Adults drink whisky.
// // Make a function that receive age, and return what they drink.

// // Rules:

// // Children under 14 old.
// // Teens under 18 old.
// // Young under 21 old.
// // Adults have 21 or more.
// // Examples: (Input --> Output)

// // 13 --> "drink toddy"
// // 17 --> "drink coke"
// // 18 --> "drink beer"
// // 20 --> "drink beer"
// // 30 --> "drink whisky"

// // My Solution
// // Use if/else statements to cover the different age ranges and return the corresponding drink for each range.
// // Check the age input and determine the appropriate drink based on the given rules.

// function peopleWithAgeDrink(age) {
//   if (age < 14) {
//     return "drink toddy";
//   } else if (age < 18) {
//     return "drink coke";
//   } else if (age < 21) {
//     return "drink beer";
//   } else {
//     return "drink whisky";
//   }
// }
// Instrutions

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// My Solution
// Use if/else statements to cover the different age ranges and return the corresponding drink for each range.
// Check the age input and determine the appropriate drink based on the given rules.

function peopleWithAgeDrink(age) {
  if (age < 14) {
    return "drink toddy";
  } else if (age < 18) {
    return "drink coke";
  } else if (age < 21) {
    return "drink beer";
  } else {
    return "drink whisky";
  }
}
