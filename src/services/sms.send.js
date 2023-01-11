//require("../config");
const model = require("../model/sms.model");
// twilio account
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_NUMBER_FROM;
const client = require("twilio")(accountSid, authToken);

// create sms
let createSms = (name, number, imagenUrl, mensaje) => {
  return new Promise(() => {
    let textSm = model.loteriVisas();
    client.messages
      .create({
        body: mensaje,
        mediaUrl: [imagenUrl],
        from: fromNumber,
        to: number,
      })
      .catch((err) => {
        console.log("twlio", err);
        return false;
      });
  });
};

module.exports = {
  createSms,
};
