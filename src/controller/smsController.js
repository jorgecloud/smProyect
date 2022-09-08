let sendSms = require("../services/smsService");

const { json } = require("express");
const dbMongo = require("../data/db");
const model = require("../model/sms.model");
// twilio account
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_NUMBER_FROM;
const client = require("twilio")(accountSid, authToken);

// create sms
let createSms = (req, res) => {
  let body = req.body;
  if (typeof body != "object") {
    return res.json({ err: "datos no validos verifique formato json" });
  }

  sendSms
    .sendSms(body)
    .then((dato) => res.json({ "send message": dato }))
    .catch((dato) => res.json({ dato: dato }));
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

let sendMail = async (mail, data) => {
  let sm = await createSms();
  console.log(sm);
};

module.exports = {
  createSms,
  sendMail,
  createReview,
};
