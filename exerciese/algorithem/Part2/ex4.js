encrypt = function (str) {
  str = str.toLowerCase();
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "z") {
      result += "a";
      continue;
    }
    let char = getPositionForChar(str.charAt(i)) + 1;

    result += String.fromCharCode(char);
  }
  return result;
};
getPositionForChar = function (char) {
  return char.charCodeAt(0);
};
console.log(encrypt("cat"));
console.log(encrypt("abcdefghigklmnobqrstuvwxyz"));
