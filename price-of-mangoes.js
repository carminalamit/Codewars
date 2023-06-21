// Instructions

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

// My Solution

// calculate the number of mangoes to be paid for by dividing the quantity by 3 and multiplying it by 2
// calculate the total cost by multiplying the number of paid mangoes by the price per mango
// check if there are any remaining mangoes that will be obtained for free and add their cost to the total cost
// return the total cost

function mango(quantity, price) {
  const paidMangoes = Math.floor(quantity / 3) * 2;
  const remainingMangoes = quantity % 3;
  const totalCost = (paidMangoes + remainingMangoes) * price;
  return totalCost;
}

// Test cases
console.log(mango(2, 3)); // Output: 6
console.log(mango(3, 3)); // Output: 6
console.log(mango(5, 3)); // Output: 12
console.log(mango(9, 5)); // Output: 30
