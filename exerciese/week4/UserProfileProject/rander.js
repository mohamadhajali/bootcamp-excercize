renderFirst = function (data) {
  console.log(data);
  const user = {
    name: data.name.first,
  };
  const source = $("#first-templet").html();
  const template = Handlebars.compile(source);
  const newHTML = template({
    name: `${data.name.title} ${data.name.first} ${data.name.last}`,
    img: data.picture.large,
  });
  $(".mainInfo").append(newHTML);
};

let users = {};
getData = function () {
  $.ajax({
    url: "https://randomuser.me/api/?results=10",
    method: "GET",
    success: function (data) {
      users = data.results;
      renderFirst(users[0]);
    },
    error: function () {
      alert("error");
    },
  });
};

getData();
