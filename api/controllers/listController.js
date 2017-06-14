const mongoose = require('mongoose'); //Import mongoose
const List = mongoose.model('card'); //Import the board's model

//Get all the lists from a specific board
function getLists(req, res) {
  console.log("Esto tiene el request: " + req.params );
  List.find().exec(function (err, data) {
    if (!err) {
      res.status(200);
      res.json(data);
    }
    else {
      res.status(404);
      res.json(err);
    }
  });
};

//Add a board 
function createList(req, res) {
  const list = new List(req.body);
  List.save(err => {
    if (!err) {
      res.status(201);
      res.json(list);
    }
    else {
      res.status(404);
      res.json(err);
    }
  });
}

//Update a List
function updateList(req, res) {
  List.findOneAndUpdate({ _id: req.body._id }, req.body, (err, data) => {
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
function deleteList(req, res) {
  List.findByIdAndRemove({ _id: req.body._id }, req.body, (err, data) => {
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
  getLists,
  createList,
  updateList,
  deleteList
}

module.exports = actions;