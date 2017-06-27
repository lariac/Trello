const Validator = require('validator');

const validateInputData = function validateInputData(data) {
  let errors = {};
  let noErrors = true;

  console.log("Me esta entrando esta data" + data.nameEmail);

  if (Validator.isEmpty(data.nameEmail) === true) {
    console.log("entre al if de name vacio");
    errors.nameEmail = "*Name/Email field is required";
    noErrors = false;
  }

  if (Validator.isEmpty(data.password) === true) {
    errors.password = "*Password field is required";
    noErrors = false;
  }

  errors.valid = noErrors;
  return errors;
}

module.exports = validateInputData