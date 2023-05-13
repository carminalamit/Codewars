// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]]

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

// More details here: https://en.wikipedia.org/wiki/Comma-separated_values

// My Solution

function toCsvText(array) {
  return array.map((row) => row.join(",")).join("\n");
}

// map() method is used to convert each row of the two-dimensional array into a comma-separated string using join(). 
// Then the resulting array of comma-separated strings is joined together into a single string using join('\n'), 
// where '\n' is the newline character that separates each row in the CSV output