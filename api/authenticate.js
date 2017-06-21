const mongoose = require('mongoose'); //Import mongoose
const jwt = require('jsonwebtoken');
const config = require('./config');
const Member = require('./models/Member');

function authenticate(req, res, next) {
  const authorizationHeader = req.headers['authorization']
  let token;

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }

  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401);
        res.json({ error: 'Failed to authenticate' });
      } else {
        Member.findById({ _id: decoded._id }).exec(function (err, data) {
          if (!user) {
            res.status(404);
            res.json({ error: 'No such user' });
          }

          req.currentUser = user;
          next();

        })

      }
    })
  } else {
    res.status(403);
    res.json({
      error: 'No token provided'
    });
  }
}


module.exports = authenticate
