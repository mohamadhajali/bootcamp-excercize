const countVowels = function (str) {
  let numOfVowels = 0;

  const VOWELS = ["a", "e", "i", "o", "u"];
  for (let latter of str) {
    VOWELS.forEach((v) => {
      if (v == latter) numOfVowels++;
    });
  }
  return numOfVowels;
};

console.log("numOfVowels " + countVowels("aabcde"));
/*

3. Median Char

*/
const medianChar = function (str) {
  str = str.split("").sort().join("");
  if (str.length % 2 == 0) {
    console.log(" Median Char " + str.charAt(str.length / 2 - 1));
  } else {
    console.log(" Median Char " + str.charAt(str.length / 2));
  }
};
medianChar("xjgyia");
/*

4. Second Biggest

*/
const secondBiggest = function (arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr[arr.length - 2];
};
const array = [12, 3, 4, 7, 23];
console.log("Second Biggest " + secondBiggest(array));

/*
5. Followed Numbers


*/
followedNumbers = function (numbers) {
  followNum = [];
  for (let n of numbers) {
    if (numbers.indexOf(n - 1) != -1 || numbers.indexOf(n + 1) != -1) {
      followNum.push(n);
    }
  }
  return followNum;
};
const ar = [1, 4, 3, 2, 9, 8, 30];
console.log("followed number " + followedNumbers(ar));

/*

Duplicate an Array
*/
duplicateAnArray = function () {
  let array = [1, 2, 3];

  array.forEach(function (n) {
    array.push(n);
  });
  return array;
};
console.log("duplicate array " + duplicateAnArray());

/*

commen elemant in two arrays
*/
let arr1 = [1, 4, 5, 6, 4, 8, 32, 421, 54];
let arr2 = [4, 1, , 11, 5, 72, 421];
let arr3 = [1, 4, 5, 22, 121, 42, 421];
const commen = function (arr1, arr2, arr3) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  arr3.sort((a, b) => a - b);
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  arr4 = [];

  arr3.forEach(function (n) {
    if (set1.has(n) && set2.has(n)) {
      arr4.push(n);
    }
  });

  return arr4;
};
console.log(commen(arr1, arr2, arr3));
/**
 *
 * Reverse Only Numbers
 */

getPostionsOfnum = function (array) {
  let postions = [];
  for (let i = 0; i < array.length; i++) {
    let a = array[i];
    let b = array[i + 1];
    let temp;
    if (!isNaN(a)) {
      postions.unshift(i);
    }
  }
  return postions;
};
ReverseOnlyNumbers = function (array, arrayOfpotiosns) {
  let temp;

  for (let i = 0; i < arrayOfpotiosns.length; i++) {
    temp = array[arrayOfpotiosns[i]];
    array[arrayOfpotiosns[i]] = array[arrayOfpotiosns[i + 1]];
    array[arrayOfpotiosns[i + 1]] = temp;
    arrayOfpotiosns.pop();
  }
  return array;
};
let arrayofnum = [1, "w", "e", 2, "r", 7, 8];

console.log(ReverseOnlyNumbers(arrayofnum, getPostionsOfnum(arrayofnum)));
/*

DeepClone
* */
