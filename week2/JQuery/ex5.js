const fruits = [
  { name: "Orange", color: "orange" },
  { name: "Banana", color: "yellow" },
  { name: "Coconut", color: "brown" },
  { name: "Kiwi", color: "brown" },
  { name: "Lemon", color: "yellow" },
  { name: "Cucumber", color: "green" },
  { name: "Persimmon", color: "orange" },
  { name: "Pumpkin", color: "orange" },
];
for (let i = 0; i < fruits.length; i++) {
  $("#basket").append(
    "<div class=" + fruits[i].color + ">" + fruits[i].name + "</div>"
  );
  console.log(fruits[i]);
}
