const reverse = function (str) {
  let reverseString = "";
  for (let i = str.length; i >= 0; i--) {
    reverseString += str.charAt(i);
  }
  return reverseString;
};

console.log(reverse("dog"));
console.log(reverse("race car")); //should return "rac ecar"
