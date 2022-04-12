const express = require("express");
const router = express.Router();
const myHead = require("../controllers/myHead");

router.head("/head", myHead);

module.exports = router;
