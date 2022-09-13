const dbMongo = require("../db/db");
const bcrypt = require('bcrypt');

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
  console.log("user",user)
  let userFind = await dbMongo.userFind(user);
  console.log("user", userFind);
  if (userFind === null || userFind === undefined) {
    return `no se encontro usuario ${user.usuario}`;
  } else if (!bcrypt.compareSync(user.password, userFind.password)){
    return {status:400, mensaje:"el password es incorrecto"}
}else{

    return userFind;
  }
};

module.exports = {
  crearUserService,
  findUser
};
