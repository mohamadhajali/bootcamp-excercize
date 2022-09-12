const express = require("express");
const router = express.Router();
const axios = require("axios");
port = 3000;
const app = express();
app.get("/city/:city", (req, response) => {
  parms = req.params.city;
  axios
    .get(
      `https://en.wikipedia.org/w/api.php?action=query&exlimit=1&explaintext=1&exsectionformat=plain&prop=extracts&titles=${parms}&format=json`
    )
    .then((result) => {
      axios.get(result.config.url).then((res) => {
        keys = Object.keys(res.data.query.pages);
        let str = keys[0].toString();
        console.log(str);
        response.send(res.data.query.pages[str].extract);
      });
    });
});
app.get("", function (err, res) {});

app.listen(port, function () {
  console.log(`Runing in port ${port}`);
});
