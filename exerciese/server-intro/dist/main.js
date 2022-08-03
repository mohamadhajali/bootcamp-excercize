const fetchBookData = function () {
  const book = $("#book").val();
  $.get(`/books/${book}`, function (bookData) {
    console.log(bookData.title);
    $("#text").append(bookData.title);
  });
};
