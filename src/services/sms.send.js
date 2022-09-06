//require("../config");
const model = require("../model/sms.model")
// twilio account
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_NUMBER_FROM;
const client = require("twilio")(accountSid, authToken);

 
// create sms 

let createSms =  (name, number) => {
  return new Promise(()=>{
    let textSm = model.reviewNew(name)
    client.messages
     .create({
       body: textSm,
       from: fromNumber,
       to: number,
     }).catch(err =>{console.log("twlio", err);  return false})
     
  })
} 


let numberArray = (body)=>{
  let numbers = body.to;
  numbers.forEach((element) => {
    let textSm = model.sendM(body)
    client.messages
      .create({
        body: textSm,
        from: fromNumber,
        // mediaUrl: ['http://mariamila.com/images/nuevas/logo-web.png'],
        to: element,
      })
      .then((mesas) => {
       console.log(mesas)
        let dato = JSON.stringify(mesas)
       // dbMongo.insertData(dato);
        return
      })
      .catch(err => { console.log(err) });
  })

};




module.exports = {
    createSms,
    numberArray
}