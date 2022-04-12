const express = require("express");
const router = express.Router();
const myGet = require("../controllers/myGet");

router.get("/get", myGet);

module.exports = router;
