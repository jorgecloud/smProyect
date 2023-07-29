const dbMongo = require("../db/db");
const { dayForm, hourForm, dateNow } = require("../utils/date");
const { getUniqueId } = require("../utils/count");
const { AppointmentModel } = require("../model/appointment.model");
const { body } = require("express-validator");

let appoinmentSave = async (body) => {
  let fechaAppointment = await dayForm(body.day);
  console.log("fecha Appointment", fechaAppointment);

  let hours = await hourForm(body.hours);

  let id = await getUniqueId();

  let appoimentCrea = new AppointmentModel(
    id,
    body.title,
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
  console.log("fecha formateado", fechaAppointment);
  let appoinmentFind = await dbMongo.gettAppointmenByDate(
    body,
    fechaAppointment
  );
  return appoinmentFind;
};

let getappoimentsById = async (body) => {
  let appoiment = await dbMongo.gettAppointmenById(body);
  return appoiment;
};

let updateAppoiment = async (body) => {
  // console.log("body ", body)
  let findAppoiment = await dbMongo.gettAppointmenById(body);

  console.log("se encontro", findAppoiment);

  if (
    findAppoiment == null ||
    findAppoiment == undefined ||
    findAppoiment.Error
  ) {
    return findAppoiment;
  }

  let newAppoiment = await dbMongo.updateAppoiment(body, findAppoiment.id);
  console.log("update", newAppoiment);

  return newAppoiment;
};

let deleteAppoiment = async(body)=>{
  let appoimentDelete = await dbMongo.deleteAppoiment(body)
  return appoimentDelete

}

module.exports = {
  appoinmentSave,
  appoinmentGet,
  getappoimentsByDate,
  updateAppoiment,
  getappoimentsById,
  deleteAppoiment
};
