const express = require("express");
const router = express.Router();

router.get("/s1", (req, res) => {
  res.status(101).send("Status Code");
});

router.get("/s2", (req, res) => {
  res.status(200).send("Status Code");
});

router.get("/s3", (req, res) => {
  res.status(201).send("Status Code");
});

router.get("/s4", (req, res) => {
  res.status(202).send("Status Code");
});

router.get("/s5", (req, res) => {
  res.status(300).send("Status Code");
});

router.get("/s6", (req, res) => {
  res.status(301).send("Status Code");
});

router.get("/s7", (req, res) => {
  res.status(401).send("Status Code");
});

router.get("/s8", (req, res) => {
  res.status(403).send("Status Code");
});

router.get("/s9", (req, res) => {
  res.status(502).send("Status Code");
});

router.get("/s10", (req, res) => {
  res.status(504).send("Status Code");
});

module.exports = router;
