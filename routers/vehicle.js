const { createVehicle, getVehicleById, getClientVehicle } = require('../controller/vehicle');

const express = require("express");

const router = require("express").Router();
router.post('/create', createVehicle);
router.get('/', getVehicleById)
router.get('/client/:idClient', getClientVehicle);

module.exports = router;