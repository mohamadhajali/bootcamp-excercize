source = $("#first-template").html();
template = Handlebars.compile(source);
const rander = class {
  renderPost = function (data) {
    document.getElementById("comments").innerHTML = "";
    const newHTML = template({ posts: data, comments: data.comments });
    $("#comments").append(newHTML);
  };
};
