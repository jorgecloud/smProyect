const dbMongo = require("../db/db");
const { dayForm, hourForm } = require("../utils/date");
const { AppointmentModel } = require("../model/appointment.model");

let appoinmentSave = async (body) => {
  let fechaAppointment = await dayForm(body.day);
  console.log("fecha Appointment", fechaAppointment);

  let hours = await hourForm(body.hours);

  let appoimentCrea = new AppointmentModel(
    body.name,
    fechaAppointment,
    hours,
    body.to,
    body.type,
    body.empresaName
  );

  let appoimentSaveDb = await dbMongo.insertAppointmen(appoimentCrea);

  return appoimentSaveDb;
};

module.exports = {
  appoinmentSave,
};
