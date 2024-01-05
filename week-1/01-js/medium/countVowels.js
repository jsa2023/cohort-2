/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const strLower =  str.toLowerCase();
  vowels = {a: true, e: true, i: true, o: true, u: true};
  let total = 0;

  for (const letter of strLower) {
    if (letter in vowels) {
      total++;
    }
  }
  return total;
}

module.exports = countVowels;