const express = require("express");
const router = express.Router();

router.get("/set", (req, res) => {
  const { number } = req.query;
  res.cookie("number", String(number));
  res.status(201).send("Cookie have been saved successfully");
});

router.get("/get", (req, res) => {
  res.status(200).send(req.cookies);
});

module.exports = router;
