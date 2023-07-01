const { body } = require("express-validator");

const validator = [
  body("email")
    .isEmail()
    .withMessage("Provide valid email")
    .exists({ checkFalsy: true }),
    
  body("password")
    .exists()
    .withMessage("Provide valid Password")
    .isString()
    .withMessage("Password should be string")
    .isLength({ min: 5 })
    .withMessage("Password should be at least 5 characters"),

  body("empresaName")
    .exists()
    .withMessage("Provide valid name empresa")
    .isString()
    .withMessage("Provide valid name empresa string")
    .isLength({ min: 5 })
]

const validatorAppoiments =[
  body("day").trim()
  .exists()
  .withMessage("Provide valid date")
  .isDate(),

  body("name").trim()
  .exists()
  .withMessage("Provide valid name")
  .isString()
  .withMessage("incorrect format"),

  body("hours").trim()
  .exists()
  .withMessage("Provide valid hours")
  .isString()
  .matches(/^(20|21|22|23|[01]\d|\d)((:[0-5]\d){1,2})$/),
  
  body("to")
  .exists()
  .isNumeric(["0-9"])
  .withMessage("provide valid number"),

  body("type")
  .notEmpty()
  .isIn(['Es', 'In'])
  .withMessage("provide valid type"),

  body("empresaName")
  .notEmpty()
  .withMessage("provide valid empresaName"),
  
]



module.exports = {
  validator,
  validatorAppoiments
};
