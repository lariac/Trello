const mongoose = require('mongoose'); //Import mongoose
const Member = require('../models/Member'); //Import the board's model
const validateInputData = require('../shared/validations/signUpValidation')
const encryptTool = require('bcrypt');

function validateDataUniqueness(data, validations) {
  var errors = validations(data);

  var self = this;
  var promiseEmailUniqueness = new Promise((resolve, reject) => {
    Member.where({ email: data.email }).exec((err, member) => {

      if (member.length > 0) {
        console.log("errors!!" + errors);
        errors.email = "*Email already in use by another account";
        errors.valid = false;
        resolve(errors);
      }
      else {
        resolve(errors);
      }
    })
  });

  return Promise.all([promiseEmailUniqueness]).then((errors) => {
    return errors;
  });
}

//Get a specific member
function getMember(req, res) {
  console.log("Esto tiene el request: " + req.params);
  Member.findById(req.params._id).exec(function (err, data) {
    if (!err) {
      res.status(200);
      res.json(data);
    }
    else {
      res.status(404);
      res.json(err);
    }
  });
}

function getMemberByEmail(req, res) {
  Member.where({ email: req.params.email }).exec((err, member) => {
    if(!err){
      res.json(member);
    }
    else{
      res.json(err);
    }
  });
}


//Add a member 
function createMember(req, res) {
  validateDataUniqueness(req.body, validateInputData).then((validationResult) => {
    if (validationResult[0].valid === false) {
      res.status(400);
      res.json(validationResult[0]);
    }
    else {
      console.log("Estoy en el else :D");
      const memberData = req.body;
      memberData.password = encryptTool.hashSync(memberData.password, 12);
      const member = new Member(memberData);
      member.save(err => {
        if (!err) {
          res.status(201);
          res.json(member);
        }
        else {
          res.status(404);
          res.json(err);
        }
      });
    }

  });
}

//Update a member
function updateMember(req, res) {
  Member.findOneAndUpdate({ _id: req.body._id }, req.body, (err, data) => {
    if (!err) {
      res.status(201);
      res.json(data);
    }
    else {
      res.status(404);
      res.json(err);
    }
  });
}

//Delete a member
function deleteMember(req, res) {
  Member.findOne({ _id: req.params._id }, function (err, member) {
    if (!err) {
      console.log("member eliminado: " + member);
      res.json(member);
      member.remove();
      res.status(201);
    }
    else {
      res.status(404);
      res.json(err);
    }

  });


  /* console.log("el miembro a eliminar es: " + req.params._id);
   Member.findByIdAndRemove({ _id: req.params._id }).exec((err, data) => {
     if (!err) {
       res.status(204);
       res.json(data);
     }
     else {
       res.status(500);
       res.json(err);
     } 
   }); */
}




const actions = {
  getMember,
  getMemberByEmail,
  createMember,
  updateMember,
  deleteMember
}

module.exports = actions;