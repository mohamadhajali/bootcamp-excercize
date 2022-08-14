getHighestScour = function (stringOfwords) {
  stringOfwords = stringOfwords.toLowerCase();
  let words = stringOfwords.split(" ");
  let WordsmaxScour = "";
  let maxScoure = 0;
  let count = 0;
  words.forEach((element) => {
    word = element.split("");
    word.forEach((char) => {
      count += getPositionForChar(char);
    });
    if (count > maxScoure) {
      maxScoure = count;
      WordsmaxScour = element;
      count = 0;
    }
  });
  return WordsmaxScour;
};

getPositionForChar = function (char) {
  const ASCII_CODE = 96;
  return char.charCodeAt(0) - ASCII_CODE;
};

console.log(getHighestScour("if you are a winner"));
