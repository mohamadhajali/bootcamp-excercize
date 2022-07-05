/*
Exercise 1 - Callbacks
Write a function pushPull that takes one argument - a function - and invokes that function:
*/
const pushPull = function (func) {
  func();
};
const push = function () {
  console.log("pushing it!");
};

const pull = function () {
  console.log("pulling it!");
};

pushPull(push); //should print "pushing it!"
pushPull(pull); //should print "pulling it!"
/*
Exercise 2 - Callbacks

Create a function called getTime that takes one parameter - a function - then calls it with an argument.
*/
const getTime = function (t) {
  const Dat = new Date();
  t(Dat);
};
const returnTime = function (time) {
  alert("The current time is: " + time);
};

getTime(returnTime);
/*
Exercise 3 - Callbacks
Given the following code, what error do you get? Write the missing part to make the code work:

*/

const alert1 = function (data) {
  alert(data);
};
const logData = function (data) {
  data = data;
};
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};
displayData(alert1, logData, "I like to party");
/*
Exercise 4 - Arrow Functions
Create an arrow function that receives three parameters and returns their sum - it should be one line.

*/

const sum = (x, y, z) => x + y + z;

const total = sum(2, 3, 4);
console.log(total);
/*
Exercise 5 - Arrow Functions
Create an arrow function called capitalize that receives any string, and returns it with proper capitalization:
*/
const capitalize = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase();
console.log(capitalize("bOb"));
console.log(capitalize("TAYLOR"));
console.log(capitalize("feliSHIA"));
/*
Exercise 6 - Arrow functions
Create a one-line arrow function called commentOnWeather 
that takes one parameter, temp. It should call determineWeather 
and return the concatenation of "It’s " and determineWeather’s output:
*/
const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};
const commentOnWeather = (temp1) =>
  determineWeather(temp1) == "hot" ? "it's hot" : "it's cold";
console.log(commentOnWeather(30));
console.log(commentOnWeather(22));
