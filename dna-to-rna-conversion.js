// Instructions

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// My Solution

// To solve this , we need to replace all occurrences of the letter "T" in the DNA string with the letter "U" to obtain the RNA sequence

// replace method is used on the dna string. The regular expression /T/g matches all occurrences of the letter "T" in the string, and it is replaced with the letter "U".
// The modified string is then returned as the RNA sequence
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// other solution

function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}
