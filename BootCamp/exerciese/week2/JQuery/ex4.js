$(".item").click(function () {
  console.log("sassssssss");
  $("#cart").append("<div class=cart-item>" + $(this).text() + "</div>");
});
