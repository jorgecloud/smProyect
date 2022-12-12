const dbMongo = require("../db/db");
const bcrypt = require('bcrypt');
const tken = require("jsonwebtoken")

let crearUserService = async (user) => {
  let userCreate = await dbMongo.inserUser(user);
  console.log("respu", userCreate);
  if (userCreate.insertedId === undefined || userCreate === null) {
    return { error: userCreate };
  }
  {
    return userCreate.insertedId;
  }
};

//find user db
let findUser = async (user) => {
  let userFind = await dbMongo.userFind(user);
  console.log("user", userFind);
  if (userFind === null || userFind === undefined) {
   return {status:400, error:"Datos incorrectos, try again"}
     
  } else if (!bcrypt.compareSync(user.password, userFind.password)){
    return {status:400, error:"el password es incorrecto try again"}
}else{

  let token = tken.sign({userFind}, process.env.SECRE, {expiresIn: process.env.CADUCIDAD})

    return {user:userFind.email, token: token};
  }
};

module.exports = {
  crearUserService,
  findUser
};
