jumble = function (colors, foods) {
  let removeDublicat1 = new Set();
  let removeDublicat2 = new Set();
  let lengthOfColors = colors.length;
  let lengthOfFoods = foods.length;
  let result = [];
  while (lengthOfColors > 0 || lengthOfFoods > 0) {
    let randomNumber1 = Math.floor(Math.random() * colors.length);
    let randomNumber2 = Math.floor(Math.random() * foods.length);

    if (!removeDublicat1.has(colors[randomNumber1])) {
      removeDublicat1.add(colors[randomNumber1]);
      result.push(colors[randomNumber1]);
      lengthOfColors--;
    }
    if (!removeDublicat2.has(foods[randomNumber2])) {
      removeDublicat2.add(colors[randomNumber2]);
      result.push(foods[randomNumber2]);
      lengthOfFoods--;
    }
  }
  let finalResult = new Set(result);
  return finalResult;
};
const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];
console.log(jumble(colors, foods));
