const Validator = require('validator');

const validateInputData = function validateInputData(data) {
  let errors = {};
  let noErrors = true;

  console.log("voy a imprimir data!");
  console.log(data);

  if (Validator.isEmpty(data.name) === true) {
    console.log("entre al if de name vacio");
    errors.name = "*Name field is required";
    noErrors = false;
  }

  if (Validator.isEmpty(data.email) === true) {
    errors.email = "*Email field is required";
    noErrors = false;
  }
  if (Validator.isEmail(data.email) === false) {
    console.log("entre al if de invalid!");
    errors.email = "*Email is invalid";
    noErrors = false;
  }
  if (Validator.isEmpty(data.password) === true) {
    errors.password = "*Password field is required";
    noErrors = false;
  }

  errors.valid = noErrors;
  return errors;
}

module.exports = validateInputData; 