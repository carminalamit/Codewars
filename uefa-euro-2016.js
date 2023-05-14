// Instruction
// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

// My Solution
// Define the uefaEuro2016() function with two parameters, teams and scores.
// Create a variable result to hold the final string to be returned.
// Use template literals to concatenate the team names and the scores in the format "At match [team1] - [team2], [winner] won!" or "At match [team1] - [team2], teams played draw.",
// depending on whether the scores are equal or not. Use the ternary operator to determine which of the two possibilities to use.
// Return the result string.

function uefaEuro2016(teams, scores) {
  let result = `At match ${teams[0]} - ${teams[1]}, `;
  if (scores[0] === scores[1]) {
    result += "teams played draw.";
  } else {
    const winner = scores[0] > scores[1] ? teams[0] : teams[1];
    result += `${winner} won!`;
  }
  return result;
}
