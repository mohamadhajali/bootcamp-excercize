function changecolor() {
  const down = document.getElementById("parent");
  let left = parseInt(down.style.left) || 0;
  left += 15;
  down.style.left = left + "px";
  console.log(down);
}
const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.getElementById("parent").appendChild(header);
let subHeader = document.createElement("h2");
subHeader.innerHTML = "SUB HEADER";
subHeader.setAttribute("class", "sub-header");
document.body.appendChild(subHeader);
const box = document.getElementById("box");

const enterColor = function () {
  box.style.backgroundColor = "#c0392b";
  box.innerHTML = "AHH GO AWAY";
};

const leaveColor = function () {
  box.style.backgroundColor = "#1abc9c";
  box.innerHTML = "Hover over me!";
};
const list = document.getElementById("myList");
const addItem = function () {
  const newItem = document.createElement("li");
  newItem.innerHTML = "A new item!";
  list.appendChild(newItem);
};
