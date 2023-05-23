const express = require("express");
const clients = express.Router();
clients.put("/clients", function (req, res) {
  res.send("update ok");
});
module.exports = clients;
