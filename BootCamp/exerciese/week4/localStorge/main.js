window.addEventListener("load", (event) => {
  t = localStorage.getItem("wisdom");
  document.getElementById("text").innerHTML = t;
});
const wisdom = [];

$("#myBtn").click(function () {
  let str = $("#myInput").val();
  $("#text").append(str);
  wisdom.push({ text: str });

  localStorage.setItem("wisdom", JSON.stringify(wisdom));
});

$("#myClear").click(function () {
  localStorage.clear();
  t = localStorage.getItem("wisdom");
  document.getElementById("text").innerHTML = t;
});
