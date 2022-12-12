const { sendSms, responceMessage } = require("../services/smsService");
const { json } = require("express");
const model = require("../model/sms.model");
const { validationResult } = require("express-validator");
const { dayForm, hourForm } = require("../utils/date");
// twilio account

// create sms
let createSms = async (req, res) => {
  let body = req.body;
  console.log("hora inicial", body.hours);
  let message;

  const errors = validationResult(req);

  // if there is error then return Error
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  if (typeof body != "object") {
    return res.status(400).json({success:false,
       errors: "datos no validos verifique formato json" });
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

  sendSms(body, message)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json({success:false,errors:err}));
};

let smsFree = (req, res) => {
  let message = req.body.messagefree;
};

// create review
let createReview = (req, res) => {
  let body = req.body;
  let numbers = body.to;
  numbers.forEach((element) => {
    let textSm = model.reviewClient(body);
    client.messages
      .create({
        body: textSm,
        from: fromNumber,
        // mediaUrl: ['http://mariamila.com/images/nuevas/logo-web.png'],
        to: element,
      })
      .then((mesas) => {
        res.json({ status: 200, message: mesas });
        let dato = JSON.stringify(mesas);
        dbMongo.insertData(dato);
        return;
      })
      .catch((err) => {
        res.json({ error: err });
      });
  });
};

let responce = async (req, res) => {
  let messag = await model.responceSm();
  let resp = await responceMessage(messag);
  console.log("resp", resp);

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(resp);
};

let sendMail = async (mail, data) => {
  let sm = await createSms();
  console.log(sm);
};

module.exports = {
  createSms,
  smsFree,
  sendMail,
  createReview,
  responce,
};
