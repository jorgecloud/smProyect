let sendSms = require("../services/smsService");

const { json } = require("express");
const dbMongo = require("../db/db");
const model = require("../model/sms.model");
// twilio account
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_NUMBER_FROM;
const client = require("twilio")(accountSid, authToken);
const { MessagingResponse } = require('twilio').twiml;

// create sms
let createSms = (req, res) => {
  let body = req.body;
  if (typeof body != "object") {
    return res.json({ err: "datos no validos verifique formato json" });
  }

  sendSms
    .sendSms(body)
    .then((data) => res.json({  data }))
    .catch((data) => res.json({ data }));
};

let smsFree = (req, res)=>{
  let message = req.body.messagefree

}

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

let responce = (req, res)=>{
  let messag = model.responceSm()
  const twiml = new MessagingResponse();
  twiml.message(messag);
  res.writeHead(200,{'Content-Type':'text/xml'})
  res.end(twiml.toString())
 /*  res.type('text/xml').send(twiml.toString());
  let body = req
  console.log("body", body) */

}

let sendMail = async (mail, data) => {
  let sm = await createSms();
  console.log(sm);
};

module.exports = {
  createSms,
  smsFree,
  sendMail,
  createReview,
  responce
};
