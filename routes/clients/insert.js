const express = require("express");
const clients = express.Router();
clients.post("/clients", function (req, res) {
  res.send("insert ok");
});
module.exports = clients;
