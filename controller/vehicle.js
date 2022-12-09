const vehicle = require('../services/vehicle');

exports.createVehicle = async (req, res) =>{
    const {id, idClient, model, plate, km, color} = req.body;
        const result = await vehicle.createVehicle(id, idClient, model, plate, km, color);
        //console.log("controller"+result);
        res.json({response: result});
};

exports.getVehicleById = async(req, res) =>{
    const {id} = req.body;
    const result = await vehicle.getVehicleById(id);
    console.log(result);
    res.json({response : result});
}

exports.getClientVehicle = async(req, res)=>{
    const {idClient} = req.params;
    console.log("params --->"+idClient);
    const result = await vehicle.getClientVehicle(idClient);
    console.log(result);
    res.json({vehicle:result});
}