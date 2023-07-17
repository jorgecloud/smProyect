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

let getappoiments = async (req, res) => {
  let body = req.body;

  let date = await appointmentService.appoinmentGet(body);

  res.json({ date });
};

let getappoimentsByDate = async (req, res) => {
  let body = req.body;

  let date = await appointmentService.getappoimentsByDate(body);

  res.json({ date });
};

let updateAppoiment = async (req, res)=> {
  let body = req.body

  const errors = validationResult(req);

  // if there is error then return Error
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
   let appoiment = await appointmentService.updateAppoiment(body)
    res.json({appoiment})

}

module.exports = {
  appointment,
  getappoiments,
  getappoimentsByDate,
  updateAppoiment
};
