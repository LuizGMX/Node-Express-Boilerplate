const express = require("express");
const router = express.Router();

//client routes
const selectClientRoute = require("./clients/select");
const insertClientRoute = require("./clients/insert");
const updateClientRoute = require("./clients/update");
const deleteClientRoute = require("./clients/delete");

router.get("/clients", selectClientRoute);
router.post("/clients", insertClientRoute);
router.put("/clients", updateClientRoute);
router.delete("/clients", deleteClientRoute);

module.exports = router;
