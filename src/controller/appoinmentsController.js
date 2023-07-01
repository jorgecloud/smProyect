const { validationResult } = require("express-validator");
const appointmentService = require("../services/appointmentService");

let appointment = async (req, res) => {
  let body = req.body;

  const errors = validationResult(req);

  // if there is error then return Error
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  if (typeof body != "object") {
    return res.status(400).json({
      success: false,
      errors: "datos no validos verifique formato json",
    });
  }

  let appoimentService = await appointmentService.appoinmentSave(body);

  res.json({ appoinment: appoimentService });
};


let getappoiments = async (req, res)=>{
  let body = req.body;


}

module.exports = {
  appointment,
};
