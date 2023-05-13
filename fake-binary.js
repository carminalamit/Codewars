// Given a string of digits, you should replace any digit below 5 with '0' 
// and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// My Solution

function fakeBin(x){
    return x.split('').map(n => n >= 5 ? '1' : '0').join('');
}

// convert the input string to an array of characters using split(''). 
// map() to apply a function to each character in the array. 
// The function checks whether the character is greater than or equal to 5 using a ternary operator, 
// and returns '1' or '0' accordingly. Finally, we join the resulting array of '1's and '0's back into a string using join('').