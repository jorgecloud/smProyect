//require("../config");
const model = require("../model/sms.model")
// twilio account
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_NUMBER_FROM;
const client = require("twilio")(accountSid, authToken);

 
// create sms 
let createSms =  (name, number) => {
  return new Promise((resolve, reject)=>{
    let textSm = model.reviewNew(name)
  resolve(client.messages
    .create({
      body: textSm,
      from: fromNumber,
      to: number,
    }))

  })
    let textSm = model.reviewNew(name)
    client.messages
      .create({
        body: textSm,
        from: fromNumber,
        to: number,
      })
      .catch(error => {throw error} );
};

module.exports = {
    createSms
}