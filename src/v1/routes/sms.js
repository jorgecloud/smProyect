const express = require("express");
const router = express.Router();
const createSms = require("../../controller/smsController");
const readcsv = require('../../controller/readCsvController')


router.post("/sendsms", createSms.createSms);

router.post("/creareview", createSms.createReview);

router.post("/readcsv", readcsv.fileCsv)


router.get("/", (req, res) => {
    res.send("Get all workouts");
  });

module.exports = router;