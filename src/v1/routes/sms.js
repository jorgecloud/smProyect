const express = require("express");
const router = express.Router();
const appointment = require("../../controller/appoinmentsController");
const sms = require("../../controller/smsController")
const readcsv = require('../../controller/readCsvController')
const user = require ('../../controller/userController')
const {validarToken} = require('../../middlewares/autenticationToke')
const validator =require('../../middlewares/validator')

// crud appoiment 
// save appoiment
router.post("/appoiments", validarToken, validator.validatorAppoiments, appointment.appointment);
// get appoiment
router.get("/getappoiments", validarToken, appointment.getappoiments)
// get appoiment by date
router.get("/getappoimentsbydate", validarToken, appointment.getappoimentsByDate)
// get appoiment by id
router.get("/getappoimentsbyid", validarToken, appointment.getappoimentsById)
// apdate appoiment
router.put("/updateAppoiment", validarToken, validator.validatorAppoimentsUpdate, appointment.updateAppoiment);
// delete appoiment
router.delete("/deleteappoiment", validarToken, validator.validatorAppoimentDelete, appointment.deleteAppoiment)




router.post("/sms", validarToken, validator.validatorsms, sms.createSms)

//router.post("/sm",createSms.responce)

//router.post("/creareview", validarToken, createSms.createReview);

router.post("/smsMasive", validarToken, readcsv.fileCsv)

router.post("/crearuser", validarToken, validator.validator, user.crearUser)

router.post("/login", validator.validator, user.login)


router.get("/", (req, res) => {
    res.json({"Get":"Get all workouts"});
  });

module.exports = router;