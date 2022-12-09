const route = require("express").Router();
const {login} = require("../controller/login");
route.post("/", login);

module.exports = route;