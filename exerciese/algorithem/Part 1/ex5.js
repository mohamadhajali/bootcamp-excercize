function add(a, b) {
  if (b == undefined) {
    return function (b) {
      return a + b;
    };
  } else {
    return a + b;
  }
}

console.log(add(2, 5));
console.log(add(2)(5));
ى;
