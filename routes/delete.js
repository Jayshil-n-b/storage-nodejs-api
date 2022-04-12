const express = require("express");
const router = express.Router();
const myDelete = require("../controllers/myDelete");

router.delete("/delete", myDelete);

module.exports = router;
