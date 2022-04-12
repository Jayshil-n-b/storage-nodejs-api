const fs = require("fs");

const myHead = (req, res) => {
  res.status(200).set("x-user", "abcd").send("Success");
};

module.exports = myHead;
