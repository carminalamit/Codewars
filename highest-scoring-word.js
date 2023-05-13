// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid

// My Solution

function high(x) {
  const letterScores = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  const words = x.split(" ");
  let highestWord = "";
  let highestScore = 0;
  words.forEach((word) => {
    const score = [...word].reduce(
      (score, char) => score + letterScores[char],
      0
    );
    if (score > highestScore) {
      highestWord = word;
      highestScore = score;
    }
  });
  return highestWord;
}

// split method splits the input string into an array of words,
// then uses a forEach loop to iterate through each word and calculate its score using reduce.
// It keeps track of the current highest word and score,
// and updates them whenever a new highest word is found.
// Last, it returns the highest scoring word.
