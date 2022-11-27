const createSms = require("./sms.send");
const dayForm = require("../utils/date")
const fromNumber = process.env.TWILIO_NUMBER_FROM;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const model = require("../model/sms.model")


let sendSms = (body) => {
   return new Promise((resolve, reject) => {

      let numbers = body.to;
      let name = body.name;
      let day =  dayForm.dayForm(body.day);
      let date = body.date;
      let hours = body.hours;
      let textSm

   
     console.log("primer",day)

      let daysEs =["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

      if (numbers === undefined || numbers === "" || numbers === null || numbers.length === 0) {
         return reject("error en los datos to")
      }

      if (name === undefined || name === "" || name === null || name.length === 0) {
         return reject("error en los datos name")
      }

      if (day === undefined || day === "" || day === null || day.length === 0 || day == false) {
         return reject("error en los datos day")
      } 
      

      if (hours === undefined || hours === "" || hours === null || hours.length === 0) {
         return reject("error en los datos hours")
      }
      if(body.type === "spanish"){
         console.log("espanol")
         textSm = model.sendM(body)
      }else{
         textSm = model.sendMessagesIn(body)
         console.log("ingles")
      }

      numbers.forEach((element) => {
   
       /*   client.messages.create({
               body: textSm,
               from: fromNumber,
               to: element,
            }).then((dato) => {
               resolve(dato)
            }).catch((error)=>{
               reject(error)
            }) */
      })
   })
}

let responce =()=>{
   const twiml = new MessagingResponse();
   twiml.message('The Robots are coming! Head for the hills!');

   res.type('text/xml').send(twiml.toString());

}


module.exports = {
   sendSms
}