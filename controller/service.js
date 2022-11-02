const service = require("../services/service");
const client = require("../services/client");

exports.createNewService = async(req, res)=>{
    const {idClient, idVehicle, type, nextDate, description, total} = req.body;
    const result = await service.createNewService(idClient, idVehicle, type, nextDate, description, total);
    console.log(result);
    res.json(result);

}

exports.getServicesByClientId = async(req, res) =>{
    const { idClient } = req.body;
    const serviceInfo = await service.getServicesByClientId(idClient);
    const clientInfo = await client.getClientById(idClient);
    const result ={
        client:clientInfo[0],
        serviceInfo
    }
    res.json(result);
}

exports.getServices = async(req, res) =>{
    const result = await service.getServices();
    res.json({services:result});
}