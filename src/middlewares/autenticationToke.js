const tken = require("jsonwebtoken");

let validarToken = (req, res, next) => {
  let token = req.headers["autorization"];

  tken.verify(token, process.env.SECRE, (err, decoded) => {
    if (err) {
      return res.json({ status: 401, mensaje: "El token no es valido", err });
    }
    req.decoded = decoded;

    next();
  });
};
module.exports = {
  validarToken,
};
