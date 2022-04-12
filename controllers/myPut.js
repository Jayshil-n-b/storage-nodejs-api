const fs = require("fs");

const myPut = (req, res) => {
  const { data } = req.body;
  // console.log(data);
  fs.writeFileSync("./database.txt", data);
  res.status(200).send("Success");
};

module.exports = myPut;
