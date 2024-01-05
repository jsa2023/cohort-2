/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  const strLength = str.length;
  const midpoint = strLength / 2;
  let firstPart;
  let secondPart;

  if (strLength % 2 === 0) {
    firstPart = str.slice(0, midpoint - 1);
    secondPart = str.slice(midpoint, strLength);

    for (let i = 0; i < firstPart.length; i++) {
      if (firstPart[i] != secondPart[secondPart.length - 1 - i]) {
        return false;
      }
      else {
        
      }
    }
    return true;
  } else {
    firstPart = str.slice(0,Math.floor(midpoint) - 1);
    secondPart = str.slice(Math.floor(midpoint) + 1, strLength);

    for (let i = 0; i < firstPart.length; i++) {
      if (firstPart[i] != secondPart[secondPart.length - 1 - i]) {
        return false;
      } else {
        
      }
    }
    return true;
  }
}

module.exports = isPalindrome;
