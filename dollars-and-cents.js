// Instructions

// The company you work for has just been awarded a contract to build a payment gateway.
// In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed
// to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!

// My Solution

function formatMoney(amount) {
  // Step 1: Convert the amount to a fixed decimal representation with two decimal places
  const formattedAmount = amount.toFixed(2);

  // Step 2: Prepend a dollar sign ('$') to the formatted amount
  const result = "$" + formattedAmount;

  // Step 3: Return the formatted amount
  return result;
}

// or
function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}

// Testing the function
console.log(formatMoney(39.99)); // Output: $39.99
console.log(formatMoney(3)); // Output: $3.00
console.log(formatMoney(3.1)); // Output: $3.10
