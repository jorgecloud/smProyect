const express = require("express");
const router = express.Router();
const createSms = require("../../controller/smsController");
const readcsv = require('../../controller/readCsvController')
const user = require ('../../controller/userController')
const {validarToken} = require('../../middlewares/autenticationToke')
const {validator, validatorAppoiments} =require('../../middlewares/validator')

router.post("/sendsms", validarToken, validatorAppoiments, createSms.createSms);

router.post("/smsfree", validarToken, createSms.smsFree)

router.post("/sm",createSms.responce )

router.post("/creareview", validarToken, createSms.createReview);

router.post("/readcsv", validarToken, readcsv.fileCsv)

router.post("/crearuser", validarToken, validator, user.crearUser)

router.post("/login", validator, user.login)


router.get("/", (req, res) => {
    res.json({"Get":"Get all workouts"});
  });

module.exports = router;