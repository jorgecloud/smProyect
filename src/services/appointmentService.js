const dbMongo = require("../db/db");
const { dayForm, hourForm, dateNow } = require("../utils/date");
const { AppointmentModel } = require("../model/appointment.model");
const { body } = require("express-validator");

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

let appoinmentGet = async (body) => {
  let fechaAppointment = await dateNow();

  let appoinmentFind = await dbMongo.gettAppointmen(body, fechaAppointment);
  return appoinmentFind;
};

let getappoimentsByDate = async (body) => {
  let fechaAppointment = await dayForm(body.day);
  console.log("fecha formateado", fechaAppointment)
  let appoinmentFind = await dbMongo.gettAppointmenByDate(body, fechaAppointment);
  return appoinmentFind;
};

module.exports = {
  appoinmentSave,
  appoinmentGet,
  getappoimentsByDate
};
