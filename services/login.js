const db = require("./db");
const jwt = require("jsonwebtoken")
require("dotenv").config()

async function login(user, pass){// TODO encrypt values
    try{
        console.log("email"+user+"password"+pass);
        const sql = `SELECT * FROM login WHERE email ='${user}' AND password = '${pass}'`;
        console.log(sql);
        const result = await db.query(sql);
        var userToken = {
            token : ""
        }
        if(result.length > 0){
            const token = jwt.sign ({user_id: user},
                process.env.TOKEN_KEY, {
                expiresIn: "300000",
            });
            
            userToken = {
                token : token,
                data : jwt.decode(token)
            }
            console.log(jwt.decode(token));
            return userToken;
        }
        return userToken
    }catch(err){
        console.log(err);
        return err;
    }
}

async function registerNewUser(name, email, password){
    try{
    const sql = `INSERT INTO login (email, password, type, name) VALUES ('${email}',  '${password}', 1, ${name})`;
    const reult = await db.query(sql);
    return "ok";
    }catch(err){
        return "Error";
    }

}

module.exports ={
    login,
    registerNewUser
}