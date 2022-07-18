let isbn = 1440633908;

$.ajax({
  method: "get",
  url: "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn,
  success: function (data) {
    console.log(data.items[0].volumeInfo.title);
  },
});
let data = $.get(
  "https://www.googleapis.com/books/v1/volumes?q=isbn:",
  function (result) {
    return result;
  }
);
console.log(data);
