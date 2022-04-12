const express = require("express");
const router = express.Router();
const myPut = require("../controllers/myPut");

router.put("/put", myPut);

module.exports = router;
