const { validationResult } = require("express-validator");
const { dayForm, hourForm } = require("../utils/date");
const model = require("../model/sms.model");

let appointment = async (req, res) => {
  let body = req.body;
  console.log(body);

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

  let fechaAppointment = await dayForm(body.day);
  console.log("fecha Appointment", fechaAppointment);

  let hours = await hourForm(body.hours);
  console.log("hora formateada", hours);

  if (body.type === "Es") {
    console.log("espanol");
    message = await model.sendMessagesEs(body, fechaAppointment, hours);
  } else {
    message = await model.sendMessagesIn(body, hours);
    console.log("In");
  }
  res.json({"ok":"ok"})
};

module.exports = {
  appointment,
};
