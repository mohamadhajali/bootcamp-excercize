let boughtTesla = true;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = true;
let currentYear = 2018;
longAgo = currentYear - yearOfTeslaPurchase;
if (boughtTesla) {
  if (isUSCitizen) {
    if (longAgo >= 4) {
      let qus = prompt("if you want to upgrade the car?");
    } else {
      let qus = prompt(" if you satisfied with the car?");
    }
  } else {
    let qus = prompt("if you want to move to US?");
  }
} else {
  let qus = prompt("if you want buy a car?");
}
