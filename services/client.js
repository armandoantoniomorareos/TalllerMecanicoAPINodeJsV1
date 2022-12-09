const db = require("./db");

async function getClientById(id){
    try{
        const sql = `SELECT * FROM customer WHERE id = ${id}`;
        return await db.query(sql);
    }catch(err){
        return err;
    }
}

async function createNewClient(name, address, telephone){
    try{
        const sql = `INSERT INTO customer (name, address, telephone) VALUES ('${name}', '${address}', '${telephone}')`;
        return await db.query(sql); 
    }catch(err){
        console.log(err);
        return err;
    }
}

async function getClientByName(name){
    try{
        const sql = `SELECT * FROM customer WHERE name = LIKE %'${name}'%`;
        return await db.query(sql);
    }catch(err){
        return err;
    }
}

async function getClients( ){ // TODO pagination

    try{
        const sql = "SELECT * FROM customer";
        return await db.query(sql);
    }catch(err){
        return err;
    }
}


module.exports = {
    getClientById,
    getClients,
    getClientByName,
    createNewClient

}