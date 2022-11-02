
const express = require('express');
require('dotenv').config();
const app = express();
const vehicleRouter = require("./routers/vehicle");
const clientRouter = require("./routers/client");
const serviceRouter = require("./routers/service");

app.use(express.json());
app.use("/api/vehicle", vehicleRouter);
app.use("/api/client", clientRouter);
app.use("/api/service", serviceRouter);

const PORT  = process.env.PORT
app.listen(PORT, (req, res) => {
    console.log('Port is listening on' + PORT);
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
  });