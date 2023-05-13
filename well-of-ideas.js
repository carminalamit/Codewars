// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
// If there are no good ideas, as is often the case, return 'Fail!'.

// My Solution
function well(x) {
  // Count the number of good ideas
  // filter() method is used to create a new array with only the elements that match the 'good'
  const goodIdeas = x.filter((idea) => idea === "good").length;

  // Check the number of good ideas and return the appropriate response
  if (goodIdeas === 0) {
    return "Fail!";
  } else if (goodIdeas <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}
