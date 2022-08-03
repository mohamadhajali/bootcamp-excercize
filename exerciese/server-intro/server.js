const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

const data = {
  8112: {
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
  },
  9121: {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
  1081: {
    title: "The Giver",
    author: "Lois Lowry",
  },
};

app.get("/books/:bookId", function (req, res) {
  let params = req.params.bookId;
  res.send(data[params]);
});

const port = 3001;
app.listen(port, function () {
  console.log("server is running in port" + port);
});
