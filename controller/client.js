const client = require("../services/client");

exports.getClientById = async(req, res) =>{
    const {id} = req.body;
    const result = await client.getClientById(id);
    console.log(result);
    res.json(result);
}

exports.createNewClient = async(req, res) =>{
    const {name, address, telephone} = req.body;
    const result = await client.createNewClient(name, address, telephone);
    console.log(result);
    res.json({response:result});
}

exports.getClientByName = async(req, res)=>{ 
    const { name } = req.body;
    const result = await client.getClientByName(name);
    res.json({client:result});
}

exports.getClients = async (req, res) =>{
    const result = await client.getClients();
    res.json({client : result });
}