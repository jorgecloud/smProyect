const createSms  = require("./sms.send");




let sendSms =  (body) => {

    return new Promise ((resolve, reject) => {

        let numbers = body.to;
        let name = body.name;
        let day = body.day;
        let hours = body.hours;

        console.log("tipo", typeof (body))
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
      createSms.numberArray(body)
   
        resolve(numbers)
    })
}




module.exports = {
    sendSms
}