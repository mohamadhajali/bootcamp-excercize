const express = require("express");
const path = require("path");
//const urllib = require("urllib");
const axios = require("axios");
const app = express();

app.use(express.static(path.join(__dirname, "myNba")));
app.use(express.static(path.join(__dirname, "node_modules")));

const data = {
  teams: {},
};
const teamToIDs = {
  lakers: "1610612747",
  warriors: "1610612744",
  heat: "1610612748",
  suns: "1610612756",
};

axios.get(`http://data.nba.net/10s/prod/v1/2022/players.json`).then((res) => {
  data.teams = res.data.league.standard;
});
app.get(`/teams/:teamName`, (req, res) => {
  const teamName = req.params.teamName;
  if (!teamToIDs.hasOwnProperty(teamName)) {
    res.send("Eroor");
  }
  let teamID = teamToIDs[teamName];
  let requstedTeam = data.teams.filter(
    (player) => player.teamId === teamID && player.isActive
  );
  res.send(requstedTeam);
});

const port = 3005;
app.listen(port, function () {
  console.log("server is running in port" + port);
});
