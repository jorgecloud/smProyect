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

let findUser = async (user) => {
  let userFind = await dbMongo.userFind(user);
  console.log("user", userFind.usuario);
  if (userFind === null || userFind === undefined) {
    return `no se encontro usuario ${user.usuario}`;
  } else if (!bcrypt.compareSync(user.password, userFind.password)){
    return {status:400, mensaje:"el password es incorrecto"}
}else{

  let token = tken.sign({userFind}, process.env.SECRE, {expiresIn: process.env.CADUCIDAD})

    return {user:userFind.usuario, token: token};
  }
};

module.exports = {
  crearUserService,
  findUser
};
