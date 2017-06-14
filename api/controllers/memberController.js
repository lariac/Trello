const mongoose = require('mongoose'); //Import mongoose
const Member = mongoose.model('member'); //Import the board's model

//Get a specific member
function getMember(req, res) {
  console.log("Esto tiene el request: " + req.params );
  Member.findById(req.params._id, function (err, data){
    if (!err) {
      res.status(200);
      res.json(data);
    }
    else {
      res.status(404);
      res.json(err);
    }
  });

//Add a member 
function createMember(req, res) {
  const member = new Member(req.body);
  Member.save(err => {
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

//Delete a List
function deleteMember(req, res) {
  Member.findByIdAndRemove({ _id: req.body._id }, req.body, (err, data) => {
    if (!err) {
      res.status(204);
      res.json(data);
    }
    else {
      res.status(500);
      res.json(err);
    }
  });
}

const actions = {
  getMember,
  createMember,
  updateMember,
  deleteMember
}

module.exports = actions;