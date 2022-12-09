const res = require("express/lib/response");
const loginI = require("../services/login");


exports.login = async (req, res)=>{
    const {email, password} = req.body;
    console.log("email -->"+email+"password-->"+password);
    const result = await loginI.login(email, password);
    return res.json(result);
}

exports.registerNewUser = async (req, res) =>{
    const {name, email, password} = req.body;
    return res.json(await loginI.registerNewUser(name, email, password));
}