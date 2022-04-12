const fs = require("fs");

const myGet = (req, res) => {
  const myFile = fs.readFileSync("./database.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  res.status(200).json({ data: myFile });
};

module.exports = myGet;
