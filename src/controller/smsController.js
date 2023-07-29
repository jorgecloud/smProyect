const { sendSms, responceMessage } = require("../services/smsService");
const { json } = require("express");
const model = require("../model/sms.model");
const { validationResult } = require("express-validator");
const { dayForm, hourForm } = require("../utils/date");

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
    return res.status(400).json({
      success: false,
      errors: "datos no validos verifique formato json",
    });
  }

  if (body.type === "Es") {
    console.log("espanol");
    message = await model.sendMessagesEs(body);
  } else {
    message = await model.sendMessagesIn(body, hours);
    console.log("In");
  }

  let smsSend = await sendSms(body, message)
    .then((data) => {
      console.log("smsSend", data);
      res.json({ data });
    })
    .catch((err) => {
      res.json({ err });
    });
};

let createSmsFree = async (req, res) => {
  let body = req.body;
  let message = body.message;
  const errors = validationResult(req);

  // if there is error then return Error
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  await sendSms(body, message)
    .then((data) => {
      console.log("smsSend", data);
      res.json({ data });
    })
    .catch((err) => {
      res.json({ err });
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
  sendMail,
  responce,
  createSmsFree,
};
