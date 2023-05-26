
let confiBd = {
url : process.env.URL,
bd: process.env.DB,
collectionSm: process.env.COLLSM
}



let corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200 // For legacy browser support
  }

  let empresas = [
    Sobandero= {
      TWILIO_ACCOUNT_SID : process.env.TWILIO_ACCOUNT_SID_SOBANDERO,
      TWILIO_AUTH_TOKEN : process.env.TWILIO_AUTH_TOKEN_SOBANDERO,
      TWILIO_NUMBER_FROM : process.env.TWILIO_NUMBER_FROM_SOBANDERO

    },
    Shantala= {
      TWILIO_ACCOUNT_SID : process.env.TWILIO_ACCOUNT_SID_SHANTALA,
      TWILIO_AUTH_TOKEN : process.env.TWILIO_AUTH_TOKEN_SHANTALA,
      TWILIO_NUMBER_FROM : process.env.TWILIO_NUMBER_FROM_SHANTALA

    },
    sms_base = {
      TWILIO_ACCOUNT_SID : process.env.TWILIO_ACCOUNT_SID_sms_base,
      TWILIO_AUTH_TOKEN : process.env.TWILIO_AUTH_TOKEN_sms_base,
      TWILIO_NUMBER_FROM : process.env.TWILIO_NUMBER_FROM_sms_base

    }
  ]

  




module.exports = {
    confiBd,
    corsOptions
}