const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"];
const renderSecond = function (data) {
  const source = $("#second-template").html();
  const template = Handlebars.compile(source);
  let newHTML = template({ people: data });
  $("#special").append(newHTML);
};
renderSecond(languages);
$.ajax({
  url: "https://randomuser.me/api/",
  dataType: "json",
  success: function (data) {
    console.log(data);
    renderSecond(data);
  },
});
