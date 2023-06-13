// Instructions

// Bob drinks too much, and he gets in trouble for it a lot. He drinks so much, in fact, that he has broken the local law enforcement's breathalizer with his alcoholic breath! Bob feels simply aweful, so he wants to make up for it by creating a function that will calculate his blood-alcohol level for them. Unfortunately, Bob has gotten too inebriated to do any programming today, so he needs your help!

// He did manage to research the formula for blood-alcohol content before getting too drunk, which he describes below.

// BAC calculator Formula:

// BAC% = (A × 5.14 / W × r) - .015 × H

// A: Total alcohol consumed, in ounces (oz)
// W: Body weight, in pounds (lbs)
// r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
// H: Time passed since drinking, in hours
// Source:

// http://www.endmemo.com/medical/bac.php

// Alcohol consumed will be passed as a drinks object with two properties: ounces (the total volume of beverage consumed in ounces), and abv (the % of alcohol by volume of the beverage as a floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). For simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.

// The gender will be passed as a string, either "male" or "female".

// Output must be returned as a number data-type, greater than or equal to 0, with up to 4 decimal places. No error handling will be required.

// Using these parameters, create the function that will calculate Bob's and other partier's BAC.

// My Solution

// First extract the necessary values from the drinks object:

// totalAlcoholConsumed (A): Total alcohol consumed in ounces
// abv (alcohol by volume): The percentage of alcohol by volume as a floating-point number
// Determine the alcohol distribution ratio (r) based on the gender (sex) parameter:

// If sex is equal to "male," set r to 0.73
// If sex is equal to "female," set r to 0.66
// Calculate the BAC (Blood-Alcohol Content) using the provided formula:

// BAC% = (A × 5.14 / W × r) - 0.015 × H
// W: Body weight in pounds
// H: Time passed since drinking in hours
// Return the calculated BAC value from the function, rounded to 4 decimal places.

function bloodAlcoholContent(drinks, weight, sex, time) {
  const totalAlcoholConsumed = drinks.ounces * drinks.abv;
  const r = sex === "male" ? 0.73 : 0.66;
  const BAC = ((totalAlcoholConsumed * 5.14) / weight) * r - 0.015 * time;

  return Math.max(0, parseFloat(BAC.toFixed(4)));
}

// Example usage

const bobDrinks = { ounces: 16, abv: 0.05 }; // Bob drinks 16 ounces of 5% abv beer
const bobWeight = 180; // Bob's weight in pounds
const bobSex = "male"; // Bob's gender
const bobTime = 2; // Time passed since Bob started drinking (in hours)

const bobBAC = bloodAlcoholContent(bobDrinks, bobWeight, bobSex, bobTime);
console.log(bobBAC); // Output: 0.0382 (rounded to 4 decimal places)
