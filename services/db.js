const mysql = require("mysql2/promise");
const config = require("../config");
async function query(sql, params){
    
        const connection = await mysql.createConnection(config.db);
        connection.connect( function(err){
            if(err) console.log("Error connecting to DB");
            console.log("Connected to DB");
        });
    
    
    const [results, ] = await connection.execute(sql, params);
    return results;
}



module.exports = { query } 