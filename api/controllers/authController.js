const mongoose = require('mongoose');
const Auth = require('../models/Auth');
const Member = require('../models/Member');
const encryptTool = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

//Post a member in authentication 
function setUserAuthentication(req, res) {
  const auth = new Auth(req.body);
  let successEmail = false;
  let successUsername = false;

  let promiseCheckUsername = new Promise((resolve, reject) => {
    Member.where({ name: req.body.nameEmail }).exec((err, member) => {
      if (member.length > 0) {
        successUsername = true;
        resolve(member);
      }
      else {
        successUsername = false;
        resolve(member);
      }
    })
  });

  var promiseCheckEmail = new Promise((resolve, reject) => {
    Member.where({ email: req.body.nameEmail }).exec((err, member) => {
      if (member.length > 0) {
        successEmail = true;
        resolve(member);
      }
      else {
        successEmail = false;
        resolve(member);
      }
    })
  });

  return Promise.all([promiseCheckUsername, promiseCheckEmail]).then((member) => {
    if (member[0] != '' || member[1] === '') {
      let user;

      if (member[0] == '') {
        user = member[1];
      }
      else {
        user = member[0];
      }

      if (encryptTool.compareSync(req.body.password, user[0].password)) {
         res.status(201);
         const token = jwt.sign({
          id: user[0]._id,
          name: user[0].name
         }, config.jwtSecret); 
         res.json({token});
      }
      else {
        res.status(401);
        let errors = {};
        errors.detailError = 'Invalid-Credentials';
        res.json(errors);
      }
    }
    else {
      res.status(401);
      let errors = {};
      errors.detailError = 'Invalid-Credentials';
      res.json(errors);
    }
  });
}


const actions = {
  setUserAuthentication
}

module.exports = actions;