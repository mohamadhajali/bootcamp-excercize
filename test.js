sumTowNumber = () => {
  let sum = 0;

  return function (num) {
    console.log("Sum   " + sum);
    sum += num;

    return sum;
  };
};
let sum = sumTowNumber();
console.log(sum(6)); //6
console.log(sum(2)); //8
console.log(sum(0)); //8
console.log(sum(9)); //17
