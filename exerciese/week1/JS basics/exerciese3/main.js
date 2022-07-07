let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.splice(1, 1);
numbers.splice(1, 1);
numbers.splice(3, 1, 1);
numbers.splice(-4);
let n = 0;
let newArray = [n].concat(numbers);
console.log(newArray);
