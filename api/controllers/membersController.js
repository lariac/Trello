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
        errors.email = "*Email already in use by another account";
        errors.valid = false;
        resolve(errors);
      }
      else {
        resolve(errors);
      }
    })
  });

    var promiseUserNameUniqueness = new Promise((resolve, reject) => {
      console.log("name es: " + data.name);
    Member.where({ name: data.name }).exec((err, member) => {

      if (member.length > 0) {
        errors.name = "*Username already in use by another account";
        errors.valid = false;
        resolve(errors);
      }
      else {
        resolve(errors);
      }
    })
  });

  return Promise.all([promiseEmailUniqueness, promiseUserNameUniqueness ]).then((errors) => {
    return errors;
  });
}

//Get a specific member
function getMember(req, res) {
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

function getMemberByUsernameEmail(req, res) {

  var promiseEmailUniqueness = new Promise((resolve, reject) => {
    Member.where({ email: req.params.identifier }).exec((err, member) => {
      if (member.length > 0) {
        resolve(member);
      }
      else {
        member = {};
        resolve(member);
      }
    })
  });

    var promiseUserNameUniqueness = new Promise((resolve, reject) => {
    Member.where({ name: req.params.identifier}).exec((err, member) => {

      if (member.length > 0) {
        resolve(member);
      }
      else {
        member = {};
        resolve(member);
      }
    })
  });

   return Promise.all([promiseEmailUniqueness, promiseUserNameUniqueness ]).then((member) => {
    res.json(member);
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
      const memberData = req.body;
      let hash = encryptTool.hashSync(memberData.password, 10);
      memberData.password = hash;
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
}




const actions = {
  getMember,
  getMemberByUsernameEmail,
  createMember,
  updateMember,
  deleteMember
}

module.exports = actions;