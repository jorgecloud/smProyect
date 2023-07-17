const express = require("express");
const router = express.Router();
const appointment = require("../../controller/appoinmentsController");
const readcsv = require('../../controller/readCsvController')
const user = require ('../../controller/userController')
const {validarToken} = require('../../middlewares/autenticationToke')
const {validator, validatorAppoiments, validatorAppoimentsUpdate} =require('../../middlewares/validator')

// crud appoiment 
// save appoiment
router.post("/appoiments", validarToken, validatorAppoiments, appointment.appointment);
// get appoiment
router.get("/getappoiments", validarToken, appointment.getappoiments)
// get appoiment by date
router.get("/getappoimentsbydate", validarToken, appointment.getappoimentsByDate)
// apdate appoiment
router.put("/updateAppoiment", validarToken, validatorAppoimentsUpdate, appointment.updateAppoiment);




//router.post("/sms", validarToken, createSms.smsFree)

//router.post("/sm",createSms.responce)

//router.post("/creareview", validarToken, createSms.createReview);

router.post("/smsMasive", validarToken, readcsv.fileCsv)

router.post("/crearuser", validarToken, validator, user.crearUser)

router.post("/login", validator, user.login)


router.get("/", (req, res) => {
    res.json({"Get":"Get all workouts"});
  });

module.exports = router;