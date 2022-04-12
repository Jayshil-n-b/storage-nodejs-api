const fs = require("fs");

const myPost = (req, res) => {
  const { data } = req.body;
  fs.writeFileSync("./database.txt", data, { flag: "a" });
  res.status(201).send("Success");
};

module.exports = myPost;
