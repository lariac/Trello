const mongoose = require('mongoose');
const Auth = require('../models/Auth');
const Member = require('../models/Member');
const encryptTool = require('bcrypt');

//Post a member in authentication 
function setUserAuthentication(req, res) {
    const auth = new Auth(req.body);

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


    




    console.log("auth es: " + auth.nameEmail);
    auth.save(err => {
        if (!err) {
            res.status(201);
            res.json(auth);
        }
        else {
            res.status(404);
            res.json(err);
        }
    });
}


const actions = {
    setUserAuthentication
}

module.exports = actions;