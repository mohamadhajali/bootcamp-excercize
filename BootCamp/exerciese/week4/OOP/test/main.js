class Zoo {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    // console.log("Added " + animal.name + " to the zoo");
  }

  showAnimals() {
    this.animals.forEach((a) => console.log(a.name + " " + a.numLegs));
  }
}

class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
  }
}

const cat = new Animal("Puss", 4);
const cat2 = new Animal("Paauss", 1);

const zoo = new Zoo();

zoo.addAnimal(cat); // prints "Added Puss to the zoo"
zoo.addAnimal(cat2); // prints "Added Puss to the zoo"

zoo.showAnimals(); //
