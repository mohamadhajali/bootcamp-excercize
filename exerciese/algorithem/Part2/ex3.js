function firstUnique(str) {
  for (let i = 0; i < str.length; i++) {
    let current = str.charAt(i);
    if (str.indexOf(current) == str.lastIndexOf(current)) {
      return current;
    }
  }
}
console.log(firstUnique("abca"));
function getMaxProfit(arr) {
  let profit = 0;
  r = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[j] > arr[i]) {
        let currentProfit = arr[j] - arr[i];
        if (currentProfit > profit) {
          profit = currentProfit;
        }
      } else {
      }
    }
  }

  return profit;
}
console.log(getMaxProfit([10, 7, 5, 8, 5, 9])); // 4
console.log(getMaxProfit([200, 150, 180, 300, 10, 150])); //150
console.log(getMaxProfit([100, 50, 100, 30, 90])); //60
console.log(getMaxProfit([100, 90, 90, 80, 80])); //0
console.log(getMaxProfit([100, 90, 80, 60, 50])); //-10
