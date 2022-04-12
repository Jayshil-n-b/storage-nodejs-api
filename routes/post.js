const express = require("express");
const router = express.Router();
const myPost = require("../controllers/myPost");

router.post("/post", myPost);

module.exports = router;
