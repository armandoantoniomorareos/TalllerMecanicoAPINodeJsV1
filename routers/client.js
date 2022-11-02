const {getClientById, getClientByName, getClients, createNewClient} = require("../controller/client")
const route = require("express").Router();

route.get("/id", getClientById);
route.get("/name", getClientByName);
route.get("/", getClients);
route.post("/create", createNewClient);


module.exports = route;