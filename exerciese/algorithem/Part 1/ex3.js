/**
 * 
 * Chars to Length
    Write a function that receive a string and decode it to a code that counts how many times each char appears.
 */
charsToLength = function (str) {
  let count = 0;
  let newStringWithNum = "";
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == str.charAt(i + 1)) {
      count++;
    } else {
      count++;
      newStringWithNum += str.charAt(i) + count;
      count = 0;
    }
  }
  return newStringWithNum;
};
console.log(charsToLength("a"));
console.log(charsToLength("aaaaabbbbbbbbbb"));
console.log(charsToLength("aAC"));
console.log(charsToLength(""));
