const {sendSms} = require("../services/smsService");
const { json } = require("express");
const model = require("../model/sms.model");
const { validationResult } = require("express-validator");
const { dayForm } = require("../utils/date");
// twilio account
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_NUMBER_FROM;
const client = require("twilio")(accountSid, authToken);
const { MessagingResponse } = require("twilio").twiml;

// create sms
let createSms = async (req, res) => {
  let body = req.body;
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
    return res.json({ err: "datos no validos verifique formato json" });
  }

  let fechaAppointment = await dayForm(body.day);

  console.log("fecha Appointment", fechaAppointment);

  if (body.type === "Es") {
    console.log("espanol");
    message = await model.sendMessagesEs(body, fechaAppointment);
  } else {
    message = await  model.sendMessagesIn(body);
    console.log("In");
  }

    sendSms(body, message).then(data => res.json(data)).catch(err => res.json(err))
    
   // .then((data) => res.json({ data }))
   // .catch((data) => res.json({ data }));
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

let responce = (req, res) => {
  let messag = model.responceSm();
  const twiml = new MessagingResponse();
  twiml.message(messag);
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
  /*  res.type('text/xml').send(twiml.toString());
  let body = req
  console.log("body", body) */
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
