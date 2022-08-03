const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/mongoPopulation", {
  useNewUrlParser: true,
});
const solarSystemSchema = new Schema({
  allPlanets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
  name: String,
  starName: String,
});

const PlanetSchema = new Schema({
  name: String,
  system: { type: Schema.Types.ObjectId, ref: "solarSystem" },
  visitors: [{ type: Schema.Types.ObjectId, ref: "Visitor" }],
});
const VisitorSchema = new Schema({
  name: String,
  homePlanet: { type: Schema.Types.ObjectId, ref: "Planet" },
  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
});
const solarSystem = mongoose.model("solarSystem", solarSystemSchema);
const Planet = mongoose.model("Planet", PlanetSchema);
const Visitor = mongoose.model("Visitor", VisitorSchema);
let solarSytemObj = new solarSystem({
  allPlanets: [],
  name: "Heaven",
  starName: "ALAqrab",
});
let planetObject = new Planet({
  name: "Marce",
  system: solarSytemObj,
  visitors: [],
});
let planetObject1 = new Planet({
  name: "Nepton",
  system: solarSytemObj,
  visitors: [],
});
let planetObject2 = new Planet({
  name: "Bloto",
  system: solarSytemObj,
  visitors: [],
});
let visitorObject = new Visitor({
  name: "mohamad",
  homePlanet: planetObject,
  visitedPlanets: [],
});
let visitorObject1 = new Visitor({
  name: "mohamad",
  homePlanet: planetObject,
  visitedPlanets: [],
});
//planetsArray = [planetObject, planetObject1, planetObject2];
//planetsArray.forEach((a) => solarSytemObj.allPlanets.push(a));

// visitorObject.visitedPlanets.push(planetObject);
// visitorObject.visitedPlanets.push(planetObject1);
// visitorObject1.visitedPlanets.push(planetObject2);

// planetObject.visitors.push(visitorObject);
// planetObject1.visitors.push(visitorObject);
// planetObject2.visitors.push(visitorObject1);

Visitor.find({})
  .populate("visitedPlanets")
  .exec(function (error, visitors) {
    console.log(
      "////////////////////////////////Ex 1//////////////////////////////////"
    );
    visitors.forEach((visitor) =>
      visitor.visitedPlanets.forEach((planet) => console.log(planet))
    );
  });

Planet.find({})
  .populate("visitors")
  .exec(function (erorr, plants) {
    console.log(
      "////////////////////////////////Ex 2//////////////////////////////////"
    );
    plants.forEach((plant) => {
      plant.visitors.forEach((vistor) => {
        console.log(vistor);
      });
    });
  });
solarSystem
  .findOne({})
  .populate({ path: "allPlanets", populate: { path: "visitors" } })
  .exec(function (error, solar) {
    console.log(
      "////////////////////////////////Ex 3//////////////////////////////////"
    );
    solar.allPlanets.forEach((plant) => {
      plant.visitors.forEach((visitor) => {
        console.log(visitor);
      });
    });
  });
