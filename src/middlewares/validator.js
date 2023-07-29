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
    .isLength({ min: 5 }),
];

const validatorAppoiments = [
  body("day").exists().isDate().withMessage("Provide valid date"),

  body("name").exists().isString().withMessage("Provide valid name"),

  body("hours")
    .exists()
    .isString()
    .matches(/^(20|21|22|23|[01]\d|\d)((:[0-5]\d){1,2})$/)
    .withMessage("Provide valid hours"),

  body("to").exists().isNumeric(["0-9"]).withMessage("provide valid number"),

  body("type").notEmpty().isIn(["Es", "In"]).withMessage("provide valid type"),

  body("empresaName").notEmpty().withMessage("provide valid empresaName"),
];

const validatorAppoimentsUpdate = [
  body("id").exists().withMessage("provide valid id"),

  body("day").exists().withMessage("Provide valid date"),

  body("name").exists().isString().withMessage("Provide valid name"),

  body("hours").exists().isString().withMessage("Provide valid hours"),

  body("to").exists().isNumeric(["0-9"]).withMessage("provide valid number"),

  body("type").notEmpty().isIn(["Es", "In"]).withMessage("provide valid type"),

  body("empresaName").notEmpty().withMessage("provide valid empresaName"),
];
const validatorAppoimentDelete = [
  body("id").exists().withMessage("provide valid id"),
  body("empresaName").exists().withMessage("provide valid empresa name"),
];


const validatorsms = [
  body("id").exists().withMessage("provide valid id"),
  body( "name").exists().withMessage("provide valid name"),
  body("day").exists().withMessage("provide valid day"),
  body("hours").exists().withMessage("provide valid hours"),
  body("to").exists().isNumeric(["0-9"]).withMessage("provide valid number"),
  body("type").notEmpty().isIn(["Es", "In"]).withMessage("provide valid type"),
  body("empresaName").notEmpty().withMessage("provide valid empresaName"),
]

const validartorSmsFree = [
  body("message").exists().withMessage("Provide valid message"),
  body("to").exists().isNumeric(["0-9"]).withMessage("provide valid number"),
  body("empresaName").exists().withMessage("provide valid empresaName")
]

module.exports = {
  validator,
  validatorAppoiments,
  validatorAppoimentsUpdate,
  validatorAppoimentDelete,
  validatorsms,
  validartorSmsFree
};
