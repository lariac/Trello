const mongoose = require('mongoose');
const Auth = require('../models/Auth');
const Member = require('../models/Member');
const encryptTool = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

//Post a member in authentication 
function setUserAuthentication(req, res) {
  console.log("entre a user authentication!!");
  const auth = new Auth(req.body);
  let successEmail = false;
  let successUsername = false;

  /*  Member.find({ $or: [{ name: req.body.nameEmail }, { email: req.body.nameEmail }] }).exec((err, member) => {
        if (member.length > 0) {
 
            
            console.log("password del member" + member + " " + member.password + member[0].name);
 
            if (encryptTool.compareSync(req.body.password, member.password)) {
                res.status(401).json({ errors: { detailError: 'Invalid-Credentials' } })
            }
            else {
 
            }
        }
        else {
            res.status(401).json({ errors: { detailError: 'Invalid-Credentials' } })
        }
    }) */

  let promiseCheckUsername = new Promise((resolve, reject) => {
    console.log('nameEmail es: ' + req.body.nameEmail);

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
    console.log("SUCCESS 0 es: " + member[0]);
    console.log("SUCCESS 0 es: " + member[1]);
    if (member[0] != '' || member[1] === '') {
      console.log("estoy en successs!!!");
      let user;

      if (member[0] == '') {
        user = member[1];
      }
      else {
        user = member[0];
      }

      console.log("user es: " + user[0].password);

      if (encryptTool.compareSync(req.body.password, user[0].password)) {
        console.log("estoy en credenciales!!");
         res.status(201);
       //  console.log("key es: " +  config.key);
         const token = jwt.sign({
          id: user[0]._id,
          name: user[0].name
         }, config.jwtSecret); 
         res.json({token});
      }
      else {
        console.log("ERROR!");
        res.status(401);
        let errors = {};
        errors.detailError = 'Invalid-Credentials';
        res.json(errors);
      }
    }
    else {
      console.log("estoy en faaaaaaail!!!");
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