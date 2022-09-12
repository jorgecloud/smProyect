const dbMongo = require("../db/db");

let crearUserService =async (user) => {
let userCreate = await dbMongo.inserUser(user)
console.log("respu", userCreate)
if(userCreate.insertedId === undefined || userCreate === null ){
    return {"error": userCreate}
}{
    return userCreate.insertedId
}
   

    
};

module.exports = {
  crearUserService,
};
