const db = require("./db")

async function createVehicle(id, idClient, model, plate, km, color ) {
    try{
        const sql = `INSERT INTO vehicle (id, idClient, model, plate, km, color) VALUES 
        ('${id}', '${idClient}', '${model}', '${plate}', '${km}', '${color}')`;
        return await db.query(sql);
    }catch(err){
        return err;
    }
}

async function getVehicleById (vehicleId){
    try{
        const sql = `SELECT * FROM vehicle WHERE id = ${vehicleId}`;
        return await db.query(sql);
    }catch(err){
        return err;
    }
}

async function getClientVehicle(idClient){
    try{
        const sql = `SELECT * FROM vehicle WHERE idClient = ${idClient}`;
        return await db.query(sql);
    }catch(err){
        return err;
    }

}

module.exports ={
    createVehicle,
    getVehicleById,
    getClientVehicle
}