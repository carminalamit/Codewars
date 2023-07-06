// Instructions

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// My Solution

// Extract the last character of the card string using the slice method.
// Use a switch statement or an if-else ladder to match the suit character and return the corresponding suit in lowercase

function defineSuit(card) {
  const suitChar = card.slice(-1);

  switch (suitChar) {
    case "♣":
      return "clubs";
    case "♦":
      return "diamonds";
    case "♥":
      return "hearts";
    case "♠":
      return "spades";
    default:
      return "unknown";
  }
}

// other solution

function defineSuit(card) {
  const suitChar = card.slice(-1);

  if (suitChar === "♣") {
    return "clubs";
  } else if (suitChar === "♦") {
    return "diamonds";
  } else if (suitChar === "♥") {
    return "hearts";
  } else if (suitChar === "♠") {
    return "spades";
  } else {
    return "unknown";
  }
}
