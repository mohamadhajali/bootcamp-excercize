/*$("h1").css("background-color", "blue");
$("li:first-child").css("background-color", "green");
$("li:last-child").css("background-color", "pink");

$("#brown-div").css("background-color", "brown");

const clicked = function () {
  $(".red-div").css("background-color", "red");
  alert($("#my-input").val());
};

const hoverd = function () {
  $(".box").css("background-color", "blue");
};

const aDynamicDiv = "<div class='mine'>Oh yes</div>";
const elem = $(aDynamicDiv);
console.log(elem);
$(".fruits").append('<p class="red">kiwi </p>');
const text = "apple";
const item = "<p>" + text + "</p>";

$(".fruits").append(item);
$(".feedme").on("click", function () {
  console.log($(this).text());
  let divCopy = "<div>" + $(this).text() + "</div>";

  $("body").append(divCopy); //use template literals and $(this)
});
$("body").append(elem);
//$(".box").hover(hoverd);
$("#BT").click(clicked);

const names = [
  { first: "Alex", last: "Johnson" },
  { first: "Byron", last: "Loveall" },
  { first: "Cassandra", last: "Wuthers" },
  { first: "Deandre", last: "Rahm" },
  { first: "Ellena", last: "Freeman" },
];
for (let name of names) {
  $("body").append(
    `<div> first name is : ${name.first}  last name is : ${name.last}</div>`
  );
}
const removed = function () {
  $(".box").remove();
};
$(".box").hover(removed);
$("button").on("click", function () {
  $("#blogs").append("<div class='blog'>Cool blog</div>");
});

$("#blogs").on("click", ".blog", function () {
  $(".blog").text("blargh");
});*/
/************************
 * Exercise 1

 * Recreate the following:

 * 
 * 
 * 
 * 
 */

const add = function () {
  let str = $("#name").val();
  $("#human").append("<li> " + str + "</ul>");
  $("#name").val("");
  console.log(str);
};
$("button").click(add);
/***
 * 
 * 
 * Exercise 3
Create the following using only JS (jQuery, of course) - there should be nothing in your HTML body
 * 
 */
$("body").append('<div class="box" </div>');
$("body").append('<div class="box" </div>');

$(".box")
  .hover(function () {
    $(this).css("background-color", "red");
    //  $(".box").css("background-color", "#8e44ad");
  })
  .mouseleave(function () {
    $(".box").css("background-color", "#8e44ad");
  });
