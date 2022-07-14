/*const items = [
  { item: "cheese", price: 15, ShouldShow: true },
  { item: "arak", price: 68, ShouldShow: false },
  { item: "hummus", price: 15, ShouldShow: true },
  { item: "pita", price: 5, ShouldShow: true },
];
var source = $("#store-template").html();

var template = Handlebars.compile(source);
const rander = function (data) {
  var newHTML = template({ items: data });
  $(".items").append(newHTML);
};
rander(items);
*/
const animals = [
  "Rabbit",
  "Giraffe",
  "Kangaroo",
  "Whale",
  "Seagull",
  "Caterpie",
];
const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"];

const renderFirst = function () {
  const people = [{ name: "Alexa" }, { name: "Jarvis" }];
  const source = $("#first-template").html();
  const template = Handlebars.compile(source);
  const newHTML = template(people);

  $("body").append(newHTML);
};

const renderSecond = function (data) {
  const source = $("#second-template").html();
  const template = Handlebars.compile(source);
  let newHTML = template({ languages: data });
  $("#special").append(newHTML);
};

renderFirst();
renderSecond(languages);
