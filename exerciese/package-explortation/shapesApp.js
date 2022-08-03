const circleUtilities = require("./circleUtils");
const urllib = require("urllib");

urllib.request(
  "http://data.nba.net/10s/prod/v1/2016/players.json",
  function (err, response) {
    console.log(response.toString());
  }
);
//^prints "The area of a circle with radius 4 is 50.26544"
