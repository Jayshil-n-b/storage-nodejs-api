const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const getRoute = require("./routes/get");
const postRoute = require("./routes/post");
const putRoute = require("./routes/put");
const deleteRoute = require("./routes/delete");
const headRoute = require("./routes/head");
const myStatus = require("./routes/status");
const myCookies = require("./routes/cookies");

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/req", getRoute);
app.use("/req", postRoute);
app.use("/req", putRoute);
app.use("/req", deleteRoute);
app.use("/req", headRoute);
app.use("/status", myStatus);
app.use("/cookies", myCookies);

app.listen(5000, () => {
  console.log("Listining on port 5000...");
});
