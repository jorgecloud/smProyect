const fromNumber = process.env.TWILIO_NUMBER_FROM;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const { rejects } = require("assert");
const path = require("path");
const { Reject } = require("twilio/lib/twiml/VoiceResponse");

//

let sendSms = (body, message) => {
  let numbers = body.to;
  console.log("number", numbers);
  return new Promise((resolve, Reject) => {
    client.messages
      .create({
        body: message,
        from: fromNumber,
        mediaUrl: [],
        // messagingServiceSid: 'MGaa7ca78cbdbab6d4be0846cabe4cb073',
        to: `${numbers}`,
      })
      .then((data) => {
        console.log("data", data);
        resolve(data);
      })
      .catch((err) => {
        console.log("err", err);
        Reject(err);
      });
  });
};

let responceMessage = (message) => {
  const twiml = new MessagingResponse();
  twiml.message(message);
  return twiml.toString();
};

module.exports = {
  sendSms,
  responceMessage,
};
