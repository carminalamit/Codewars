// Instructions

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny,
// and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// Instructions

function greet(name) {
  return "Hello, " + name + "!";
  if (name === "Johnny") return "Hello, my love!";
}

// My Solution
function greet(name) {
  if (name === "Johnny") return "Hello, my love!";

  return "Hello, " + name + "!";
}

// In this updated code, the if statement checks if the name parameter is equal to "Johnny". 
// If it is, it returns the special greeting "Hello, my love!". Otherwise, it proceeds to the next line and returns the default greeting "Hello, " followed by the provided name.
// Now, when you call the greet function, it will greet Johnny differently and provide a standard greeting for any other name.