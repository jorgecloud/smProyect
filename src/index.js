require('dotenv-safe').config({ allowEmptyValues: true });

const express = require("express");
const v1router = require('./v1/routes/sms')
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload"); 
const cors = require("cors");
const { corsOptions } = require("./config");

// server
const app = express();

//middleware
app.use(fileUpload());
// apliction / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//application/json
app.use(bodyParser.json());

// cors
app.use(cors(corsOptions));

//routes
app.use("/api/v1", v1router);



// server up
app.listen(process.env.PORT, () => {
  console.log("server on port ", process.env.PORT);
});
