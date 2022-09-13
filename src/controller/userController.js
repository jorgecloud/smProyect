const users = require('../services/userService')
const bcrypt = require('bcrypt');


let crearUser = async(req, res)=>{
    let body = req.body
    let password = body.password
    console.log(body)
    let pass = await bcrypt.hashSync(password,5)

    let user = {
        usuario:body.usuario,
        password:pass
    }
    console.log("el usuario es ",user)

  let userId = await users.crearUserService(user)
  console.log("respuesta",userId)
  
  if(userId.error){
    console.log("Error",userId)
    res.json({"Error":userId.error})
  }else{
    console.log("todo bienusuario creado",userId)
    res.json({"userId":userId})
  }   
 
}

let login =async(req, res)=>{
  let user = req.body 
  let userExist = await  users.findUser(user)
  res.json({userExist})
}

module.exports = {
    crearUser,
    login
}