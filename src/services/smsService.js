const fromNumber = process.env.TWILIO_NUMBER_FROM;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const path = require("path");


let imagen = path.join(__dirname, `../images/incomeTaxes.jpg`)

let sendSms = (body, message) => {
  return new Promise((resolve, reject) => {
    let numbers = body.to;

    numbers.forEach((element) => {
      console.log(element)
      client.messages 
      .create({  
        body: message, 
        from: fromNumber,
        mediaUrl: [],
        // messagingServiceSid: 'MGaa7ca78cbdbab6d4be0846cabe4cb073',      
         to: `+1${element}` 
       }) 
      .then(data => resolve(data))
      .catch(err =>reject(err)) 
      .done();
    }); 
 });
}

let responceMessage = (message) => {
  const twiml = new MessagingResponse();
  twiml.message(message);
 return twiml.toString()
};

module.exports = {
  sendSms,
  responceMessage
};
