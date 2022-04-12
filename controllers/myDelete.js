const fs = require("fs");

const myDelete = (req, res) => {
  fs.readFile("./database.txt", "utf8", function (err, data) {
    var linesExceptFirst = data.split("\n").slice(1).join("\n");
    fs.writeFile("./database.txt", linesExceptFirst, (err, data) => {});
  });
  res.status(200).send("Success");
};

module.exports = myDelete;
