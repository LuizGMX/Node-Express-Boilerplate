const express = require("express");
const clients = express.Router();
clients.delete("/clients", function (req, res) {
  res.send("delete ok");
});
module.exports = clients;
