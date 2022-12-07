const createSms = require("./sms.send");
const fromNumber = process.env.TWILIO_NUMBER_FROM;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const MessagingResponse = require("twilio").twiml.MessagingResponse;


let sendSms = (body, message) => {
  //console.log('mes',message)
  //let messageSend = message
/*   client.messages 
      .create({  
        body: 'hola desde nodejs again again', 
        from: '+13257701298',
        // messagingServiceSid: 'MGaa7ca78cbdbab6d4be0846cabe4cb073',      
         to: '+17864316969' 
       }) 
      .then(data => console.log(data.sid)) 
      .done(); */
  return new Promise((resolve, reject) => {
    let numbers = body.to;

    numbers.forEach((element) => {
      console.log(element)
      client.messages 
      .create({  
        body: message, 
        from: fromNumber,
        // messagingServiceSid: 'MGaa7ca78cbdbab6d4be0846cabe4cb073',      
         to: `+1${element}` 
       }) 
      .then(data => resolve(data))
      .catch(err =>reject(err)) 
      .done();
    }); 
 });
}

let responce = () => {
  const twiml = new MessagingResponse();
  twiml.message("The Robots are coming! Head for the hills!");

  res.type("text/xml").send(twiml.toString());
};

module.exports = {
  sendSms,
};
