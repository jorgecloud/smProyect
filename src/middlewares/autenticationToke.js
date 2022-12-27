const tken = require("jsonwebtoken");

let validarToken = (req, res, next) => {
  let token = req.headers["autorization"];

  tken.verify(token, process.env.SECRE, (err, decoded) => {
    if (err) {
      return res.status(401).json({  success: false, errors: err });
    }
    req.decoded = decoded;

    next();
  });
};
module.exports = {
  validarToken,
};
