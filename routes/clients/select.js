const express = require("express");
const clients = express.Router();
clients.get("/clients", function (req, res) {
  res.send("select ok");
});
module.exports = clients;
