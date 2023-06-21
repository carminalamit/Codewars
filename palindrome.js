// Instructions

// Write a function that checks if a given string (case insensitive) is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards,
// such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

// My Solution
// Define the function isPalindrome that takes a parameter x
// Preprocess the input string by removing non-alphanumeric characters and converting it to lowercase
// Initialize two pointers, left pointing to the beginning of the string and right pointing to the end of the string
// Iterate while the left pointer is less than the right pointer
// Compare the characters at the left and right pointers
// Move the left pointer one position to the right and the right pointer one position to the left
// If the loop completes without finding any non-matching characters, return true as the string is a palindrome

function isPalindrome(x) {
  const cleanedString = x.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = cleanedString.length - 1;

  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Test cases
console.log(isPalindrome("madam")); // Output: true
