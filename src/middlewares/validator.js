const { body } = require("express-validator");

const validator = [
  body("email")
    .isEmail()
    .withMessage("Provide valid email")
    .exists({ checkFalsy: true }),

  body("password")
    .exists()
    .withMessage("Password is required")
    .isString()
    .withMessage("Password should be string")
    .isLength({ min: 5 })
    .withMessage("Password should be at least 5 characters"),
];
module.exports = {
  validator,
};
