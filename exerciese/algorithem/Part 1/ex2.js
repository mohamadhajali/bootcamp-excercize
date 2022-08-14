/****************************
 * 
 * Unique Characters
    Implement an algorithm to determine if a string has all unique characters.
 */
hasAllUniqueCharacters = function (str) {
  let uniqueChar = new Set();
  str = str.toLowerCase();
  str = [...str];

  str.forEach((c) => {
    uniqueChar.add(c);
  });
  if (str.length != uniqueChar.size) {
    return false;
  } else {
    return true;
  }
};
console.log(hasAllUniqueCharacters("cat"));
console.log(hasAllUniqueCharacters("cAC"));
console.log(hasAllUniqueCharacters("cc"));
