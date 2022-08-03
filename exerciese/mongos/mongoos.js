mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/humens", { useNewUrlParser: true });

const Schema = mongoose.Schema;

const personSchema = Schema({
  firstName: String,
  lastName: String,
  age: Number,
});
const person = mongoose.model("person", personSchema);
// const p2 = new person({ firstName: "mohamad", lastName: "ali", age: 28 });
// const p3 = new person({ firstName: "ali", lastName: "assad", age: 28 });
// const p4 = new person({ firstName: "yazan", lastName: "saeed", age: 28 });
// const p5 = new person({ firstName: "sultan", lastName: "waleed", age: 28 });
// const allPerson = [p2, p3, p4, p5];
// allPerson.forEach((p) => {
//   p.save();
// });
// person.findById("62e7b58e6e3991dcf273e6a6", function (err, result) {
//   result.age += 20;
//   result.save();
//   console.log(result);
// });
// person.findByIdAndUpdate(
//   "62e7b58e6e3991dcf273e6a6",
//   { age: 20 },
//   function (err, result) {
//     result.save();
//   }
// );
// person.findById("62e7b58e6e3991dcf273e6a6", function (err, result) {
//   person.remove(function (err) {});
// });
let peoplePromise = person.find({});

peoplePromise.then(function (people) {
  console.log(people);
});
