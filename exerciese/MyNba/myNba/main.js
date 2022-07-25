render = function (playarTeam) {
  $(`#roster`).empty();

  const source = $(`#template`).html();
  const template = Handlebars.compile(source);

  const newHTML = template({ playarTeam });
  $(`#roster`).append(newHTML);
};

feachData = function () {
  $(`#roster`).empty();

  const val = $("#nameOFteam").val();
  $.get(`/teams/${val}`, function (response) {
    console.log(response);
    render(response);
  });
};
const ImageForError = function (img) {
  $(img).attr(
    "src",
    "https://rukminim1.flixcart.com/image/416/416/poster/e/n/a/cristiano-ronaldo-poster-small-ron-90035-original-imaefbj9fz3wzyge.jpeg?q=70"
  );
};
let players = [];

const addToDreamTeam = function (Clicked_id) {
  if (players.length >= 5) {
    alert("Dream team just 5 players");
    return;
  }
  button = document.getElementById(Clicked_id);
  let playerDiv1 = $(button).closest(".player");
  let playerDiv2 = playerDiv1.closest("div");
  let name = playerDiv2.find("#name").text();
  let pos = playerDiv2.find("#pos").text();
  let heightFeet = playerDiv2.find("#heightFeet").text();
  let img = playerDiv2.find("#palyarImg").attr("src");
  let fullname = name.split(" ");
  console.log(fullname);
  let player = {
    firstName: fullname[0],
    lastName: fullname[1],
    pos: pos,
    heightFeet: heightFeet,
  };
  players.push(player);
  console.log(players);
};

displayDreamTeam = function () {
  render(players);
};
