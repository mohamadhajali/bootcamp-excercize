/*** 
 * Camelcase
Write a simple camelCase method for strings. All words (except for the first) 
must have their first letter capitalized without spaces.
 */
camelCase = function (str) {
  let newSantance = "";
  newSantance += str.charAt(0).toLowerCase();
  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i) == " ") {
      newSantance += str.charAt(i + 1).toUpperCase();
      i++;
    } else {
      newSantance += str.charAt(i);
    }
  }
  return newSantance;
};

console.log(camelCase("Camel case word"));
