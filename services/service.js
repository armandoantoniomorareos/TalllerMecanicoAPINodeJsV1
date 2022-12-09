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
        const sql = "SELECT * FROM customer JOIN service ON service.idClient = customer.id";
        const sqlVechicles  = "SELECT * FROM vehicle";
        //sql = "SELECT * FROM service";
        //const sql = "SELECT * FROM customer JOIN service ON customer.id = service.idClient JOIN customer ON service.idClient = customer.id";
        console.log(sql);
        console.log("HOST " + process.env.HOST+" db" + process.env.DATABASE);

        var serviceClients  = await db.query(sql);
        var vehicle = await db.query(sqlVechicles);
        var result = [];
        console.log("service --->"+serviceClients);
        console.log("Vehicle --->"+vehicle);
    
        for(var i = 0; i<serviceClients.length; i++){
            var index = vehicle.findIndex(x => x.id == serviceClients[i].idVehicle)
            if(index > -1){
                const service ={
                    id:serviceClients[i].id,
                    name:serviceClients[i].name,
                    telephone:serviceClients[i].telephone,
                    idClient:serviceClients[i].idClient,
                    addressClient : serviceClients[i].address,
                    idVehicle:serviceClients[i].idVehicle,
                    type:serviceClients[i].type,
                    nextDate:serviceClients[i].nextDate,
                    description:serviceClients[i].description,
                    total:serviceClients[i].total,
                    model:vehicle[index].model,
                    plate:vehicle[index].plate,
                    km:vehicle[index].km,
                    color:vehicle[index].color,

                        
                }
                var data= {
                    service:service
                }
                result[i] = data;
                console.log(result);
            }
        }
        /*serviceClients.forEach((value)=>{
            
            console.log(value +"idclient"+value.idClient);
        });*/
        return result;
    }catch(err){
        console.log(err);
        return err;
    }
}

async function createNewService(idClient, idVehicle, type, nextDate, description, total){
    try{
        const sql = `INSERT INTO service (idClient, idVehicle, type, nextDate, description, total) 
        VALUES ('${idClient}', '${idVehicle}', '${type}', '${nextDate}', '${description}', '${total}')`;
        const result = await db.query(sql);
        console.log(""+result);
        return "ok";
    }catch(err){
        return "error";
    }
}

module.exports ={
    getServicesByClientId,
    getServices,
    createNewService
}