//require("../config");
const model = require("../model/sms.model");
// twilio account
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_NUMBER_FROM;
const client = require("twilio")(accountSid, authToken);

// create sms
let createSms = (name, number, imagenUrl, mensaje) => {
  if (imagenUrl.includes("http://") || imagenUrl.includes("https://")) {
    return new Promise((resolve, reject) => {
      //let textSm = model.loteriVisas();
      client.messages
        .create({
          body: mensaje,
          from: fromNumber,
          mediaUrl: [imagenUrl],
          to: number,
        })
        .then((data) => {
          resolve(data), console.log("data", data);
        })
        .catch((err) => {
          console.log("twlio", err);
          reject(err);
          return false;
        });
    });
  } else {
    return new Promise((resolve, reject) => {
      //let textSm = model.loteriVisas();
      client.messages
        .create({
          body: mensaje,
          from: fromNumber,
          to: number,
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          console.log("twlio", err);
          reject(err)

          return false;
        });
    });
  }
};

module.exports = {
  createSms,
};
