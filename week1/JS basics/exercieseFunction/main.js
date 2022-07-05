let ar = new Array(1, 2, 3, 4, 5);
arraynum(ar);

console.log(check(ar, 9));
function isEven(n) {
  if (n % 2 == 0) {
    console.log("EVEN");
  } else {
    console.log("odd");
  }
}
function arraynum(a) {
  for (let i = 0; i < a.length; i++) {
    isEven(a[i]);
  }
}
function check(a, num) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] == num) {
      return true;
    }
  }
  return false;
}

let calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
};
const result1 = calculator.add(20, 1);
const result2 = calculator.sub(30, 9);

console.log(calculator.add(result1, result2)); //should print 42

//////////////////////////////////////////////////////////////////////
const names = ["ali", "mohamad"];
const ages = [20, 22];
let people = [];

for (let index in names) {
  people.push({ "name ": names[index], "age ": ages[index] });
}
console.log(people);
