const createSms = require("./sms.send");
const fromNumber = process.env.TWILIO_NUMBER_FROM;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const model = require("../model/sms.model")


let sendSms = (body) => {
   return new Promise((resolve, reject) => {

      let numbers = body.to;
      let name = body.name;
      let day = body.day;
      let hours = body.hours;
      let textSm

      console.log("body.to", body.to)
      if (numbers === undefined || numbers === "" || numbers === null || numbers.length === 0) {
         return reject("error en los datos to")
      }

      if (name === undefined || name === "" || name === null || name.length === 0) {
         return reject("error en los datos name")
      }

      if (day === undefined || day === "" || day === null || day.length === 0) {
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
   
         client.messages.create({
               body: textSm,
               from: fromNumber,
               to: element,
            }).then((dato) => {
               resolve(dato)
            }).catch((error)=>{
               reject(error)
            })
      })
   })
}


module.exports = {
   sendSms
}