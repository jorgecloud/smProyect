const users = require("../services/userService");
const bcrypt = require("bcrypt");
const user = require("../model/user.model");
const { validationResult } = require("express-validator");
const validator = require("../middlewares/validator");

let crearUser = async (req, res) => {
  let body = req.body;
  const errors = validationResult(req);

  // if there is error then return Error
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  let password = body.password;
  console.log(body);
  let pass = await bcrypt.hashSync(password, 5);

  let user = {
    email: body.email,
    password: pass,
    empresaName: body.empresaName
  };

  console.log("el usuario es ", user);

  let userId = await users.crearUserService(user);
  console.log("respuesta", userId);

  if (userId.error) {
    console.log("Error", userId);
    res.json({ Error: userId.error });
  } else {
    console.log("todo bien usuario creado", userId);
    res.json({ userId: userId });
  }
};

let login = async (req, res) => {
  let user = req.body;
  console.log("user", user)
  const errors = validationResult(req);

   // if there is error then return Error
   if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  let userExist = await users.findUser(user);
  console.log("userExist",userExist)
  if(userExist.error){
    return res.status(400).json({success:false, errors: userExist.error}) 
  }
  res.status(200).json({ success: true, accesToken:userExist.token, user:userExist.user, empresa: userExist.empresaName });
//res.status(200).json({success:userExist})
};

module.exports = {
  crearUser,
  login,
};
