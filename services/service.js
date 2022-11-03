const db = require("./db")
require("dotenv").config();
async function getServicesByClientId(clientId){
    try{
        const sql = `SELECT * FROM service WHERE idClient = ${clientId}`;
        return await db.query(sql);
    }catch(err){
        return err;
    }
}

async function getServices(){ //TODO pagination 
    try{
        const sql = "SELECT * FROM service JOIN (vehicle JOIN customer ON customer.id = vehicle.idClient) ON service.idClient = customer.id";
        console.log(sql);
        console.log("HOST " + process.env.HOST);
        return await db.query(sql);
    }catch(err){
        return err;
    }
}

async function createNewService(idClient, idVehicle, type, nextDate, description, total){
    try{
        const sql = `INSERT INTO service (idClient, idVehicle, type, nextDate, description, total) 
        VALUES ('${idClient}', '${idVehicle}', '${type}', '${nextDate}', '${description}', '${total}')`;
        return await db.query(sql);
    }catch(err){
        return err;
    }
}

module.exports ={
    getServicesByClientId,
    getServices,
    createNewService
}