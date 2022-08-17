printStarSeries = function (m, n) {
  let string = "";
  while (n > 0) {
    for (let i = 1; i <= m; i++) {
      for (let j = 0; j < i; j++) {
        string += "*";
      }
      string += "\n";
    }
    for (let i = 1; i <= m - 1; i++) {
      for (let j = 0; j < m - i; j++) {
        string += "*";
      }
      string += "\n";
    }
    string += "\n";
    n = n - 1;
  }

  console.log(string);
};
printStarSeries(5, 3);
