let p1 = {
  name: "mohaamad",
  age: "22",
  city: "nablus",
};
let p2 = {
  name: "ali",
  age: "22",
  city: "ramallah",
};

if (p1.age == p2.age) {
  if (p1.city == p2.city) {
    console.log("Jill wanted to date Robert ");
  } else {
    console.log("Jill wanted to date Robert, but couldn’t");
  }
}
///////////////////////////////////////////////////////////////////////////////////////////
console.log("Exercise 3 (Extra Practice)");
let reservations = {
  Bob: {
    claimed: false,
  },
  Ted: {
    claimed: true,
  },
};
let name = prompt("Please enter the name for your reservation");
name.toLowerCase();
for (let res in reservations) {
  if (res.toLocaleLowerCase() == name.toLocaleLowerCase()) {
    console.log("weclom " + name);
    if (res.claimed == false) {
      console.log("Hmm, someone already claimed this reservation");
    } else {
      console.log("welcoom");
    }
  }
}

/*if(name == "Bob"){
    if(reservations.Bob.claimed==false){
        console.log("Hmm, someone already claimed this reservation");
    }else{
        console.log("welcoom")
    }
}else if(name =="Ted"){
    console.log("weclom "+name)
    if(reservations.Ted.claimed==false){
        console.log("Hmm, someone already claimed this reservation");
    }else{
        console.log("welcoom")
    }
}else{
    console.log("You have no reservation")
}*/
